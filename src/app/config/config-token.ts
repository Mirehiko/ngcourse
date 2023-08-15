import { InjectionToken } from '@angular/core';

export interface ConfigToken {
  isExperimental: boolean;
}

export const APP_CONFIG = new InjectionToken<ConfigToken>(
  'config.token description',
  {
    providedIn: 'root',
    factory: () => ({
      isExperimental: true,
    }),
  }
);
