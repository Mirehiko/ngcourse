import {InjectionToken} from '@angular/core';

export const APP_CONFIG = new InjectionToken<AppConfig>('app.config');
export interface AppConfig {
  apiEndpoint: string;
  title: string;
}
export const CONFIG: AppConfig = {
  apiEndpoint: 'api.luxoft.com',
  title: 'Dependency Injection'
};

