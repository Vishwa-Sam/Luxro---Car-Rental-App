import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';

import {
  PreloadAllModules,
  provideRouter,
  withComponentInputBinding,
  withInMemoryScrolling,
  withPreloading,
} from '@angular/router';

import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),

    provideRouter(routes, withInMemoryScrolling({ scrollPositionRestoration: 'top' }), withComponentInputBinding(), withPreloading(PreloadAllModules)),
  ],
};
