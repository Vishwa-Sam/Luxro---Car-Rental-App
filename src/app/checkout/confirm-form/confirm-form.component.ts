import { Component, inject, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { DropdownDirective } from '../../shared/drop-down.directive';
import { ProgressIndicatorComponent } from '../../shared/progress-indicator/progress-indicator.component';
import { CheckoutService } from '../checkout.service';
import { DataStorageService } from '../../shared/data-storage.service';

function nameValidator(controlName1: string, controlName2: string) {
  return (control: AbstractControl) => {
    const value1 = control.get(controlName1)?.value;
    const value2 = control.get(controlName2)?.value;

    if (value1 !== value2) {
      return null;
    }
    return { EqualInputs: true };
  };
}

@Component({
  selector: 'app-confirm-form',
  imports: [ReactiveFormsModule, DropdownDirective, FormsModule, ProgressIndicatorComponent],
  templateUrl: './confirm-form.html',
  styleUrl: './confirm-form.css',
})
export class ConfirmFormComponent implements OnInit {
  userForm!: FormGroup;
  selectedFile: File | null = null;

  private router = inject(Router);
  private routes = inject(ActivatedRoute);
  private checkoutService = inject(CheckoutService);
  private dataBaseService = inject(DataStorageService);
  private fb = inject(FormBuilder);

  openDropdown: 'city' | 'state' | null = null;
  city = [
    'Chennai',
    'Delhi',
    'Kochi',
    'Mumbai',
    'Hyderabad',
    'Bangalore',
    'Pune',
    'Ahmedabad',
    'Goa',
    'Mysoor',
    'Moonar',
    'Ooty',
    'Coimbatore',
    'Kolkata',
  ];
  state = [
    'Tamil Nadu',
    'Karnataka',
    'Telungana',
    'Delhi',
    'Maharastra',
    'Gujarat',
    'West Bengal',
    'Kerala',
    'Goa',
    'Andhra Pradesh',
  ];

  get deliveryType(): string {
    const checkout = this.checkoutService.selectedCar();

    return checkout?.user?.deliveryType || checkout?.car?.deliveryType || 'Self Pickup';
  }

  ngOnInit() {
    this.initForm();
  }

  onSubmit() {
    if (!confirm('Do you want to proceed with the booking?')) return;
    if (this.userForm.invalid) {
      this.userForm.markAllAsTouched();
      return;
    }

    const { names, ...rest } = this.userForm.value;
    const formData = { ...rest, ...names, documentFile: this.selectedFile };

    const checkout = this.checkoutService.selectedCar();
    if (!checkout || !checkout.firebaseId) return;

    const updatedPayload = {
      ...checkout,
      user: formData,
    };
    this.dataBaseService
      .updateCheckoutCars(checkout.firebaseId, updatedPayload)
      .then(() => {
        this.checkoutService.setCheckoutCar(updatedPayload);
        this.router.navigate(['../successful-rent'], { relativeTo: this.routes });
      })
      .catch((err) => {
        console.error('Failed to update checkout', err);
      });
  }

  private initForm() {
    this.userForm = this.fb.group({
      names: this.fb.group(
        {
          firstName: ['', Validators.required],
          lastName: ['', Validators.required],
        },
        { validators: nameValidator('firstName', 'lastName') }
      ),
      phone: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      address: ['', Validators.required],
      city: ['', Validators.required],
      state: ['', Validators.required],
      pincode: ['', Validators.required],
      documentFile: [null, Validators.required],
      driverNeeded: [false, Validators.required],
      agree: [false, Validators.required],
      deliveryType: [this.deliveryType, Validators.required],
    });
  }

  onClear() {
    this.userForm.reset();
  }

  onFileSelected(event: any) {
    const file = event.target.files[0];
    if (file) {
      this.selectedFile = file; 
      this.userForm.get('documentFile')?.setValue(file.name); 
    } else {
      this.selectedFile = null;
      this.userForm.get('documentFile')?.setValue(null);
    }
  }

  toggleDropdown(type: 'city' | 'state') {
    this.openDropdown = this.openDropdown === type ? null : type;
  }

  selectOption(type: 'city' | 'state', value: string) {
    this.userForm.get(type)?.setValue(value);
    this.openDropdown = null;
  }

  get driverFeeMessage(): string | null {
    return this.userForm?.get('driverNeeded')?.value
      ? 'An extra charge of ₹1000 for driver fees will be included. This will be conveyed during the confirmation call, and you can choose to cancel it by informing the calling employee.'
      : null;
  }
}

// this.dataBaseService.updateCheckoutCars(checkout.firebaseId, updatedPayload).subscribe(() => {
//   this.checkoutService.setCheckoutCar(updatedPayload);
//   this.router.navigate(['../successful-rent'], { relativeTo: this.routes });
// });
