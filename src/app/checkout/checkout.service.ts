import { computed, Injectable, signal } from '@angular/core';

import { CarModel } from '../shared/car.model';
import { CheckoutPayload, TripDetails } from '../shared/all-models.model';

@Injectable({
  providedIn: 'root',
})
export class CheckoutService {
  selectedCar = signal<CheckoutPayload | null>(null);
  isLoading = signal(true);
  tripDetails = signal<TripDetails>({
    pickup: '',
    dropoff: '',
    startDate: '',
    endDate: '',
  });
  taxRate = 0.18;

  checkoutCount = computed(() => {
    const payload = this.selectedCar();
    return payload ? 1 : 0;
  });

  addToCheckout(car: CarModel) {
    if (this.selectedCar()) {
      alert('Checkout already has a car');
      return;
    }
    this.selectedCar.set({
      car,
      trip: this.tripDetails(),
      pricing: {
        baseFare: 0,
        discountedPrice: 0,
        insurance: 0,
        tax: 0,
        extraFees: 0,
        total: 0,
      },
    });
  }

  setCheckoutCar(payLoad: CheckoutPayload | null) {
    this.selectedCar.set(payLoad);
    this.isLoading.set(false);
  }

  deleteFromCheckout() {
    if (!this.selectedCar()) {
      alert('No car to remove');
      return;
    }
    this.selectedCar.set(null);
  }

  isInCheckout(carId: string | number) {
    const existingcar = this.selectedCar();
    return existingcar ? String(existingcar.car.id) === String(carId) : false;
  }

  setTripDetails(details: TripDetails) {
    this.tripDetails.set(details);
  }

  getTripDetails() {
    return this.tripDetails();
  }

  // Payment calculations
  duration = computed(() => {
    const trip = this.tripDetails();
    if (!trip?.startDate || !trip?.endDate) {
      return 1;
    }

    const start = new Date(trip.startDate);
    const end = new Date(trip.endDate);

    const diff = (end.getTime() - start.getTime()) / (1000 * 60 * 60); //conversion ms to hrs
    return diff > 0 ? diff : 1;
  });

  discount = computed(() => {
    const duration = this.duration();

    // Apply 10% discount if duration is 24 hours or more
    return duration >= 24 ? 0.1 : 0;
  });

  basePrice = computed(() => {
    const car = this.selectedCar()?.car;
    const duration = this.duration();
    if (!car) {
      return 0;
    }
    return car.price * this.duration();
  });

  discountedPrice = computed(() => {
    const base = this.basePrice();
    const discount = this.discount();

    return base - base * discount;
  });

  insurance = computed(() => {
    const car = this.selectedCar()?.car;
    if (!car) {
      return 0;
    }
    return car.insuranceIncluded ? 0 : 100;
  });

  extraFees = computed(() => {
    const car = this.selectedCar()?.car;
    if (!car) return 0;
    if (car.luxury) return 1500;
    if (car.extraFees !== 'None') return 500;

    return 0;
  });

  taxAmount = computed(() => {
    return Math.round(this.discountedPrice() * this.taxRate);
  });

  totalAmount = computed(() => {
    const discounted = this.discountedPrice();
    const insurance = this.insurance();
    const fees = this.extraFees();
    const tax = this.taxAmount(); // if tax is percentage of subtotal

    return discounted + insurance + fees + tax;
  });
}
