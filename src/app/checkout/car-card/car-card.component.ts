import { Component, effect, input, signal, WritableSignal } from '@angular/core';

import { CarModel } from '../../shared/car.model';

@Component({
  selector: 'app-car-card',
  imports: [],
  templateUrl: './car-card.html',
  styleUrl: './car-card.css',
})
export class CarCardComponent {
  car = input<CarModel | null>();

  mainImage: WritableSignal<string> = signal('');

  constructor() {
    effect(() => {
      const car = this.car();
      if (car) {
        this.mainImage.set(car.img);
      }
    });
  }

  setMainImage(img: string) {
    this.mainImage.set(img);
  }
}
