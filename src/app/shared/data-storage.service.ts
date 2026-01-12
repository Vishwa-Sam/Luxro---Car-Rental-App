import { Injectable, inject } from '@angular/core';
import { ref, push, get, remove, update } from 'firebase/database';
import { onAuthStateChanged } from 'firebase/auth';
import { database, auth } from '../../firebase';

import { WishlistService } from '../favourite/wishlist.service';
import { CheckoutService } from '../checkout/checkout.service';
import { CarModel } from './car.model';
import { CheckoutPayload } from './all-models.model';

@Injectable({ providedIn: 'root' })
export class DataStorageService {
  private wishlistService = inject(WishlistService);
  private checkoutService = inject(CheckoutService);

  // Ensures we ALWAYS get UID even after page refresh
  private waitForUser(): Promise<string | null> {
    return new Promise((resolve) => {
      const unsubscribe = onAuthStateChanged(auth, (user) => {
        unsubscribe();
        resolve(user?.uid ?? null);
      });
    });
  }

  async saveWishlistCar(car: CarModel) {
    const uid = await this.waitForUser();
    if (!uid) throw new Error('Not authenticated');

    return push(ref(database, `wishlist/${uid}`), car);
  }

  async fetchWishlistCars() {
    const uid = await this.waitForUser();
    if (!uid) {
      this.wishlistService.setCars([]);
      return;
    }

    this.wishlistService.isLoading.set(true);

    const snapshot = await get(ref(database, `wishlist/${uid}`));

    if (!snapshot.exists()) {
      this.wishlistService.setCars([]);
      this.wishlistService.isLoading.set(false);
      return;
    }

    const data = snapshot.val();
    const cars = Object.entries(data).map(([firebaseId, car]) => ({
      ...(car as CarModel),
      firebaseId,
    }));

    this.wishlistService.setCars(cars);
    this.wishlistService.isLoading.set(false);
  }

  async removeWishlistCars(firebaseId: string) {
    const uid = await this.waitForUser();
    if (!uid) throw new Error('Not authenticated');

    return remove(ref(database, `wishlist/${uid}/${firebaseId}`));
  }

  

  async saveCheckoutCars(payload: CheckoutPayload) {
    const uid = await this.waitForUser();
    if (!uid) throw new Error('Not authenticated');

    return push(ref(database, `checkout/${uid}`), payload);
  }

  async fetchCheckoutCars() {
    const uid = await this.waitForUser();
    if (!uid) {
      this.checkoutService.setCheckoutCar(null);
      return;
    }

    this.checkoutService.isLoading.set(true);

    const snapshot = await get(ref(database, `checkout/${uid}`));

    if (!snapshot.exists()) {
      this.checkoutService.setCheckoutCar(null);
      this.checkoutService.isLoading.set(false);
      return;
    }

    const data = snapshot.val();
    const checkouts = Object.entries(data).map(([firebaseId, payload]) => ({
      ...(payload as CheckoutPayload),
      firebaseId,
    }));

    const latest = checkouts[checkouts.length - 1];

    this.checkoutService.setCheckoutCar(latest);
    this.checkoutService.setTripDetails(latest.trip);
    this.checkoutService.isLoading.set(false);
  }

  async removeCheckoutCars(firebaseId: string) {
    const uid = await this.waitForUser();
    if (!uid) throw new Error('Not authenticated');

    return remove(ref(database, `checkout/${uid}/${firebaseId}`));
  }

  async updateCheckoutCars(firebaseId: string, payload: CheckoutPayload) {
    const uid = await this.waitForUser();
    if (!uid) throw new Error('Not authenticated');

    return update(ref(database, `checkout/${uid}/${firebaseId}`), payload);
  }
}
