import { Component, computed, effect, inject, signal, WritableSignal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute, Router } from '@angular/router';
import { map } from 'rxjs';
import { CommonModule } from '@angular/common';

import { CarRentalService } from '../car-rental.service';
import { CarModel } from '../../shared/car.model';
import { WishlistService } from '../../favourite/wishlist.service';
import { CheckoutService } from '../../checkout/checkout.service';
import { DataStorageService } from '../../shared/data-storage.service';
import { CheckoutPayload } from '../../shared/all-models.model';
import { AlertMessageCompoent } from '../../shared/alert-message/alert-message.component';

@Component({
  selector: 'app-car-detail',
  imports: [CommonModule, AlertMessageCompoent],
  templateUrl: './car-detail.html',
  styleUrl: './car-detail.css',
})
export class CarDetailComponent {
  private carService = inject(CarRentalService);
  private router = inject(Router);
  private routes = inject(ActivatedRoute);
  private wishListService = inject(WishlistService);
  private checkoutService = inject(CheckoutService);
  private dataBaseService = inject(DataStorageService);

  private detailRoute = computed(
    () => this.routes.children.find((r) => r.outlet === 'detail') ?? this.routes
  );

  id = toSignal(this.detailRoute().paramMap.pipe(map((params) => params.get('id'))), {
    initialValue: null,
  });

  cars = computed<CarModel | undefined>(() => {
    const allCars = this.carService.getCarSignal()();
    const carId = this.id(); 

    if (!allCars.length || !carId) {
      return undefined;
    }

    return allCars.find((item) => item.id === carId); 
  });

  mainImage: WritableSignal<string> = signal('');

  constructor() {
    effect(() => {
      const car = this.cars();
      if (car) {
        this.mainImage.set(car.img);
      }
    });
  }

  setMainImage(img: string) {
    this.mainImage.set(img);
  }

  closeDetails() {
    this.router.navigate(['fleet']);
  }

  inListAlready = computed(() => {
    const addedCar = this.cars();
    return addedCar ? this.wishListService.isInWishlist(addedCar.id) : false;
  });

  hasCarInCheckout = computed(() => {
    return this.checkoutService.selectedCar() !== null;
  });

  onAddToWishlist() {
    const car = this.cars();
    if (!car) {
      this.showAlert('error', 'Car not found.');
      return;
    }

    if (this.inListAlready()) {
      this.showAlert('info', 'This car is already in your wishlist.');
      return;
    }

    this.dataBaseService
      .saveWishlistCar(car)
      .then((res) => {
        this.wishListService.onAddCar(car, res.key!);
        this.showAlert('success', 'Car added to wishlist successfully!');
      })
      .catch((err) => {
        console.error('Failed to add to wishlist', err);
        this.showAlert('error', 'Failed to add car to wishlist.');
      });
  }

  onAddtoCheckout(car: CarModel) {
    if (this.hasCarInCheckout()) {
      this.showAlert('warning', 'You already have a car in checkout.');
      return;
    }

    const payload: CheckoutPayload = {
      car,
      trip: this.checkoutService.getTripDetails(),
      pricing: {
        baseFare: 0,
        discountedPrice: 0,
        insurance: 0,
        tax: 0,
        extraFees: 0,
        total: 0,
      },
    };

    this.dataBaseService
      .saveCheckoutCars(payload)
      .then((res) => {
        this.checkoutService.setCheckoutCar({
          ...payload,
          firebaseId: res.key!,
        });
        this.showAlert('success', 'Car added to checkout Successfully!');
      })
      .catch((err) => {
        console.error('Failed to save checkout', err);
        this.showAlert('error', 'Failed to add car to checkout.');
      });
  }

  alertType: 'success' | 'info' | 'warning' | 'error' | null = null;
  alertMessage = '';

  private showAlert(
    type: 'success' | 'info' | 'warning' | 'error',
    message: string,
    timeout = 3000
  ) {
    this.alertType = type;
    this.alertMessage = message;

    setTimeout(() => {
      this.alertType = null;
      this.alertMessage = '';
    }, timeout);
  }
}

// this.dataBaseService.saveCheckoutCars(payload).then({
//   next: (res) => {
//     this.checkoutService.setCheckoutCar({
//       ...payload,
//       firebaseId: res.name,
//     });
//   },
//   error: (err) => console.error('Failed to save checkout', err),
// });
