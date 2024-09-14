import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter, withViewTransitions } from '@angular/router';
import {
  provideHttpClient,
  withInterceptorsFromDi,
} from '@angular/common/http';

import { routes } from './app.routes';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(
      routes,
      withViewTransitions({
        skipInitialTransition: true,
        // onViewTransitionCreated(transitionInfo) {
        //   console.log({ transitionInfo });
        // },
      })
    ),
    // Nueva manera de traer el modulo httpClient en forma global Angular 18
    provideHttpClient(withInterceptorsFromDi()), provideAnimationsAsync(),
  ],
};
