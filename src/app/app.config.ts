import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideHttpClient } from '@angular/common/http';
import {NgxPaginationModule} from "ngx-pagination";

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideHttpClient(), NgxPaginationModule]
};
