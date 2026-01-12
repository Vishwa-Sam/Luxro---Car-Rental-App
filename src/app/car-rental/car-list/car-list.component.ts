import { Component, inject, input } from '@angular/core';

import { CarRentalService } from '../car-rental.service';
import { CarModel } from '../../shared/car.model';
import { CarCardComponent } from './car-card/car-card.component';
import { cardAnimation } from '../../app.animations';

@Component({
  selector: 'app-car-list',
  imports: [CarCardComponent],
  animations: [cardAnimation],
  templateUrl: './car-list.html',
  styleUrl: './car-list.css',
})
export class CarListComponent {
  private carRentalService = inject(CarRentalService);

  cars = input.required<CarModel[]>();

  // cars = this.carRentalService.getCarSignal();
}
