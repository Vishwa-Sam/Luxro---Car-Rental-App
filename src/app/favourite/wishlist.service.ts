import { computed, Injectable, signal } from '@angular/core';

import { CarModel } from '../shared/car.model';

@Injectable({
  providedIn: 'root',
})

export class WishlistService {
  cars = signal<(CarModel & { firebaseId: string })[]>([]);
  isLoading = signal(true);

  wishlistCount = computed(() => this.cars().length);

  wishlistSignal() {
    return this.cars;
  }

  onAddCar(car: CarModel, firebaseId: string) {
    this.cars.update((items) => {
      if (items.some((item) => item.id === car.id)) {
        window.alert('car is already in list');
        return items;
      }
      return [...items, { ...car, firebaseId }];
    });
  }

  setCars(cars: (CarModel & { firebaseId: string })[]) {
    this.cars.set(cars);
    this.isLoading.set(false);
  }

  deleteCar(firbaseId: string) {
    this.cars.update((items) => items.filter((i) => i.firebaseId !== firbaseId));
  }

  isInWishlist(carId: string | number) {
    return this.wishlistSignal()().some((c) => c.id === carId);
  }
}
