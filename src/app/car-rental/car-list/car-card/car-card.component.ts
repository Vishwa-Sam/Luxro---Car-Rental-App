import { Component, computed, inject, input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { CarModel } from '../../../shared/car.model';
import { WishlistService } from '../../../favourite/wishlist.service';
import { CheckoutService } from '../../../checkout/checkout.service';
import { DataStorageService } from '../../../shared/data-storage.service';
import { AlertMessageCompoent } from '../../../shared/alert-message/alert-message.component';
import { cardAnimation } from '../../../app.animations';

@Component({
  selector: 'app-car-card',
  imports: [AlertMessageCompoent],
  animations: [cardAnimation],
  templateUrl: './car-card.html',
  styleUrl: './car-card.css',
})
export class CarCardComponent {
  car = input<CarModel>();
  id = input<string | number>();

  private router = inject(Router);
  private routes = inject(ActivatedRoute);
  private wishListService = inject(WishlistService);
  private checkoutService = inject(CheckoutService);
  private dataBaseService = inject(DataStorageService);

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

  goToDetails() {
    this.router.navigate([{ outlets: { detail: ['cars', this.id()] } }], {
      relativeTo: this.routes,
    });
  }

  inListAlready = computed(() => {
    const addedCar = this.car();
    return addedCar ? this.wishListService.isInWishlist(addedCar.id) : false;
  });

  hasCarInCheckout = computed(() => {
    return this.checkoutService.selectedCar() !== null;
  });

  onAddToWishlist() {
    const car = this.car();
    if (!car) {
      this.showAlert('error', 'Car not found.');
      return;
    }

    if (this.inListAlready()) {
      this.showAlert('info', 'This car is already in your wishlist.');
      return;
    }
    // this.wishListService.onAddCar(car);
    this.dataBaseService
      .saveWishlistCar(car)
      .then((res) => {
        this.wishListService.onAddCar(car, res.key!);
        this.showAlert('success', 'Car added to wishlist!');
      })
      .catch((err) => {
        console.error('Failed to add to wishlist', err);
        this.showAlert('error', 'Failed to add car to wishlist.');
      });
  }

  onAddtoCheckout(car: CarModel) {
    if (this.hasCarInCheckout()) {
      this.showAlert('warning', 'Checkout already has a car.');
      return;
    }

    this.showAlert('success', 'Car added to checkout!');

    this.checkoutService.addToCheckout(car);

    const payload = this.checkoutService.selectedCar();
    if (!payload) {
      this.showAlert('error', 'Failed to prepare checkout.');
      return;
    }

    this.dataBaseService
      .saveCheckoutCars(payload)
      .then((res) => {
        this.checkoutService.setCheckoutCar({
          ...payload,
          firebaseId: res.key!,
        });
      })
      .catch((err) => {
        console.error('Failed to add car to checkout', err);
        this.showAlert('error', 'Failed to add car to checkout.');
      });
  }
}

// onAddtoCheckout(car: CarModel) {
//   if (this.hasCarInCheckout()) {
//     alert('Checkout already has a car');
//     return;
//   }

//   const payload: CheckoutPayload = {
//     car,
//     trip: this.checkoutService.getTripDetails(),
//     pricing: {
//       baseFare: 0,
//       discountedPrice: 0,
//       insurance: 0,
//       tax: 0,
//       extraFees: 0,
//       total: 0,
//     },
//   };

//   this.dataBaseService
//     .saveCheckoutCars(payload).then((res) => {
//       this.checkoutService.setCheckoutCar({
//         ...payload,
//         firebaseId: res.key!,
//       });
//     })
//     .catch((err) => console.error('Failed to add car to checkout', err));
// }
