import { Component, effect, EventEmitter, inject, input, OnInit, Output } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  ValidationErrors,
  Validators,
} from '@angular/forms';

import { CheckoutService } from '../checkout.service';
import { TripDetails } from '../../shared/all-models.model';
import { DataStorageService } from '../../shared/data-storage.service';

@Component({
  selector: 'app-edit-trip',
  imports: [ReactiveFormsModule],
  templateUrl: './edit-trip.html',
  styleUrl: './edit-trip.css',
})
export class EditTripComponent implements OnInit {
  tripForm!: FormGroup;
  tripDetails = input<TripDetails>();
  @Output() tripUpdated = new EventEmitter<'success' | 'error'>();

  private checkoutService = inject(CheckoutService);
  private dataBaseService = inject(DataStorageService);
  private fb = inject(FormBuilder);

  tripFormEffect = effect(() => {
    if (this.tripForm) {
      const details = this.checkoutService.tripDetails();
      if (details) {
        this.tripForm.patchValue(details, { emitEvent: false });
      }
    }
  });

  ngOnInit() {
    this.initForm();

    // Subscribe to changes and update the checkout service
    this.tripForm.valueChanges.subscribe((val: TripDetails) => {
      if (this.tripForm.valid) {
        this.checkoutService.setTripDetails(val);
      }
    });
  }

  private initForm() {
    this.tripForm = this.fb.group(
      {
        pickup: [this.tripDetails()?.pickup, Validators.required],
        dropoff: [this.tripDetails()?.dropoff, Validators.required],
        startDate: [this.tripDetails()?.startDate, Validators.required],
        endDate: [this.tripDetails()?.endDate, Validators.required],
      },
      {
        validators: this.dateRangeValidator,
      }
    );
  }

  updateTrip() {
    if (this.tripForm.invalid) {
      this.tripForm.markAllAsTouched();
      return;
    }

    // Update local signal
    this.checkoutService.setTripDetails(this.tripForm.value);

    // Persist to Firebase
    const checkout = this.checkoutService.selectedCar();
    if (!checkout?.firebaseId) {
      this.tripUpdated.emit('error');
      return;
    }

    const updatedPayload = {
      ...checkout,
      trip: this.tripForm.value,
    };

    this.dataBaseService
      .updateCheckoutCars(checkout.firebaseId, updatedPayload)
      .then(() => {
        this.tripUpdated.emit('success');
      })
      .catch((err) => {
        console.error('Failed to update trip', err);
        this.tripUpdated.emit('error');
      });
  }

  private dateRangeValidator(group: AbstractControl): ValidationErrors | null {
    const startDate = group.get('startDate')?.value;
    const endDate = group.get('endDate')?.value;

    if (!startDate || !endDate) {
      return null;
    }

    return new Date(endDate) < new Date(startDate) ? { invalidRange: true } : null;
  }
}
