import { Component, inject, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';

import { WishlistService } from './wishlist.service';
import { CarModel } from '../shared/car.model';
import { DataStorageService } from '../shared/data-storage.service';
import { CheckoutService } from '../checkout/checkout.service';
import { LoadSpinnerComponent } from '../shared/load-spinner/load-spinner.component';
import { AlertMessageCompoent } from '../shared/alert-message/alert-message.component';
import { cardAnimation } from '../app.animations';

@Component({
  selector: 'app-favourite',
  standalone: true,
  imports: [RouterLink, LoadSpinnerComponent, AlertMessageCompoent],
  animations: [cardAnimation],
  templateUrl: './favourite.html',
  styleUrl: './favourite.css',
})
export class FavouriteComponent implements OnInit {
  private wishListService = inject(WishlistService);
  private checkoutService = inject(CheckoutService);
  private dataBaseService = inject(DataStorageService);

  carList = this.wishListService.cars;
  wishlistCount = this.wishListService.wishlistCount;
  isLoading = this.wishListService.isLoading;

  ngOnInit() {
    this.dataBaseService
      .fetchWishlistCars()
      .catch((err) => console.error('Failed to load wishlist', err));
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

  onDelete(car: CarModel & { firebaseId: string }) {
    if (!car.firebaseId) {
      this.showAlert('error', 'Invalid wishlist item.');
      return;
    }

    this.dataBaseService
      .removeWishlistCars(car.firebaseId)
      .then(() => {
        this.wishListService.deleteCar(car.firebaseId);
        this.showAlert('success', 'Car removed from wishlist.');
      })
      .catch((err) => {
        console.error('Delete failed', err);
        this.showAlert('error', 'Failed to remove car from wishlist.');
      });
  }

  onAddToCheckout(car: CarModel) {
    if (this.checkoutService.selectedCar()) {
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
