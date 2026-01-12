import { Routes } from '@angular/router';
import { authGuard } from './auth/auth.guard';

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/discover',
    pathMatch: 'full',
  },

  {
    path: 'discover',
    loadComponent: () =>
      import('./landing-page/landing-page.component').then((m) => m.LandingPageComponent),
  },

  {
    path: 'authentication',
    loadComponent: () => import('./auth/auth.component').then((m) => m.AuthComponent),
  },

  {
    path: 'fleet',
    canActivate: [authGuard],
    loadChildren: () => import('./car-rental/car-rental.routes').then((m) => m.carRentalRoutes),
  },

  {
    path: 'book-now',
    canActivate: [authGuard],
    loadChildren: () => import('./checkout/checkout.routes').then((m) => m.checkoutRoutes),
  },

  {
    path: 'wishlist',
    canActivate: [authGuard],
    loadComponent: () =>
      import('./favourite/favourite.component').then((m) => m.FavouriteComponent),
  },

  {
    path: 'insights',
    children: [
      {
        path: '',
        loadComponent: () =>
          import('./landing-page/blogs/blogs.component').then((m) => m.BlogsComponent),
      },
      {
        path: ':slug',
        loadComponent: () =>
          import('./landing-page/blogs/blog-detail/blog-detail').then((m) => m.BlogDetailComponent),
      },
    ],
  },

  {
    path: 'about',
    loadComponent: () =>
      import('./landing-page/about-us/about-us.component').then((m) => m.AboutUsComponent),
  },

  {
    path: 'careers',
    children: [
      {
        path: '',
        loadComponent: () =>
          import('./landing-page/careers/careers.component').then((m) => m.CareersComponent),
      },
      {
        path: 'success',
        loadComponent: () =>
          import('./landing-page/careers/success/success').then((m) => m.Success),
      },
    ],
  },

  {
    path: 'contact',
    loadComponent: () =>
      import('./contact-us/contact-us.component').then((m) => m.ContactUsComponent),
  },

  {
    path: 'partner',
    children: [
      {
        path: '',
        loadComponent: () => import('./host/host.component').then((m) => m.HostComponent),
      },
      {
        path: 'register',
        loadComponent: () => import('./host/hostform/hostform').then((m) => m.HostformComponent),
      },
      {
        path: 'success',
        loadComponent: () =>
          import('./host/successhost/host.successhost').then((m) => m.SuccesshostComponent),
      },
    ],
  },

  {
    path: '**',
    loadComponent: () => import('./not-found/not-found').then((m) => m.NotFound),
  },
];
