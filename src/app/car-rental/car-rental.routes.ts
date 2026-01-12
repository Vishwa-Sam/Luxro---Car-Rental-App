import { Routes } from '@angular/router';

import { CarRentalComponent } from './car-rental.component';

export const carRentalRoutes: Routes = [
  {
    path: '',
    component: CarRentalComponent,
    children: [
      {
        path: '',
        loadComponent: () =>
          import('./car-list/car-list.component').then((m) => m.CarListComponent),
      },
      {
        path: 'cars/:id',
        outlet: 'detail',
        loadComponent: () =>
          import('./car-detail/car-detail.component').then((m) => m.CarDetailComponent),
      },
    ],
  },
];
