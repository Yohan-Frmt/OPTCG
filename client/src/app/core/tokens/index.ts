import { InjectionToken } from '@angular/core';

export interface Config {
  production: boolean;
  api: string;
}

export const CONFIG = new InjectionToken<Config>('CONFIG');

export const CREDENTIALS_KEY = 'credentials';
