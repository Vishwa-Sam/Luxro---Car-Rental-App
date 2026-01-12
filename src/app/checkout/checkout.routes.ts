import { Routes } from '@angular/router';

import { CheckoutComponent } from './checkout.component';

export const checkoutRoutes: Routes = [
  {
    path: '',
    component: CheckoutComponent,
    children: [
      {
        path: 'user-form',
        loadComponent: () =>
          import('./confirm-form/confirm-form.component').then((m) => m.ConfirmFormComponent),
      },
      {
        path: 'successful-rent',
        loadComponent: () =>
          import('./successful-rent/successful-rent.component').then(
            (m) => m.SuccessfulRentComponent
          ),
      },
    ],
  },
];
