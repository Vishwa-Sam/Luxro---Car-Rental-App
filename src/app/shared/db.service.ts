import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, tap } from 'rxjs';

import { WishlistService } from '../favourite/wishlist.service';
import { CarModel } from './car.model';
import { CheckoutPayload } from './all-models.model';
import { CheckoutService } from '../checkout/checkout.service';

@Injectable({ providedIn: 'root' })
export class DataStorageService {
  private http = inject(HttpClient);
  private wishListService = inject(WishlistService);
  private checkoutService = inject(CheckoutService);

  saveWishlistCar(car: CarModel) {
    return this.http.post<{ name: string }>(
      'https://car-rental-app-c1694-default-rtdb.asia-southeast1.firebasedatabase.app/wishlist.json',
      car
    );
  }

  fetchWishlistCars() {
    return this.http
      .get<Record<string, CarModel>>(
        'https://car-rental-app-c1694-default-rtdb.asia-southeast1.firebasedatabase.app/wishlist.json'
      )
      .pipe(
        map((data) => {
          if (!data) return [];

          return Object.entries(data).map(([firebaseId, car]) => ({
            ...car,
            firebaseId,
          }));
        }),
        tap((cars) => this.wishListService.setCars(cars))
      );
  }

  removeWishlistCars(firebaseId: string) {
    return this.http.delete(
      `https://car-rental-app-c1694-default-rtdb.asia-southeast1.firebasedatabase.app/wishlist/${firebaseId}.json`
    );
  }

  saveCheckoutCars(payload: CheckoutPayload) {
    return this.http.post<{ name: string }>(
      `https://car-rental-app-c1694-default-rtdb.asia-southeast1.firebasedatabase.app/checkout/.json`,
      payload
    );
  }

  fetchCheckoutCars() {
    return this.http
      .get<Record<string, CheckoutPayload>>(
        `https://car-rental-app-c1694-default-rtdb.asia-southeast1.firebasedatabase.app/checkout.json`
      )
      .pipe(
        map((data) => {
          if (!data) {
            return [];
          }
          return Object.entries(data).map(([firebaseId, payload]) => ({
            ...payload,
            firebaseId,
          }));
        }),
        tap((cars) => {
          if (cars.length > 0) {
            const latest = cars[cars.length - 1];

            this.checkoutService.setCheckoutCar(latest);
            this.checkoutService.setTripDetails(latest.trip);
          }
        })
      );
  }

  removeCheckoutCars(firebaseId: string) {
    return this.http.delete(
      `https://car-rental-app-c1694-default-rtdb.asia-southeast1.firebasedatabase.app/checkout/${firebaseId}.json`
    );
  }

  updateCheckoutCars(firebaseId: string, payload: CheckoutPayload) {
    return this.http.put(
      `https://car-rental-app-c1694-default-rtdb.asia-southeast1.firebasedatabase.app/checkout/${firebaseId}.json`,
      payload
    );
  }
}
