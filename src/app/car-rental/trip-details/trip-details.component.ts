import { Component, inject, input, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  ValidationErrors,
  Validators,
} from '@angular/forms';

import { CheckoutService } from '../../checkout/checkout.service';
import { TripDetails } from '../../shared/all-models.model';

@Component({
  selector: 'app-trip-details',
  imports: [ReactiveFormsModule],
  templateUrl: './trip-details.html',
  styleUrl: './trip-details.css',
})
export class TripDetailsComponent implements OnInit {
  tripForm!: FormGroup;
  editMode = false;
  id = input<string | number>();

  private fb = inject(FormBuilder);
  private checkoutService = inject(CheckoutService);

  ngOnInit() {
    this.initForm();
    this.loadFromCheckout();
  }

  onSubmit() {
    if (this.tripForm.invalid) {
      this.tripForm.markAllAsTouched();
      return;
    }

    const details: TripDetails = {
      pickup: this.tripForm.value.pickupLocation,
      dropoff: this.tripForm.value.dropoffLocation,
      startDate: this.tripForm.value.startDateTime,
      endDate: this.tripForm.value.endDateTime,
    };

    this.checkoutService.setTripDetails(details);
  }

  onClear() {
    this.tripForm.reset();
  }

  private initForm() {
    this.tripForm = this.fb.group(
      {
        pickupLocation: ['', Validators.required],
        dropoffLocation: ['', Validators.required],
        startDateTime: ['', Validators.required],
        endDateTime: ['', Validators.required],
      },
      {
        validators: this.dateRangeValidator,
      }
    );
  }

  loadFromCheckout() {
    const details: TripDetails = this.checkoutService.tripDetails();
    if (!details) {
      return;
    }

    this.editMode = true;
    this.tripForm.patchValue({
      pickupLocation: details.pickup,
      dropoffLocation: details.dropoff,
      startDateTime: details.startDate,
      endDateTime: details.endDate,
    });
  }

  private dateRangeValidator(group: AbstractControl): ValidationErrors | null {
    const startDate = group.get('startDateTime')?.value;
    const endDate = group.get('endDateTime')?.value;

    if (!startDate || !endDate) {
      return null;
    }

    return new Date(endDate) < new Date(startDate) ? { invalidRange: true } : null;
  }
}
