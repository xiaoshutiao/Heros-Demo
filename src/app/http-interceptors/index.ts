import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { TimeoutInterceptor } from './timeout-interceptor';

export const httpInterceptorProviders = [
    { provide: HTTP_INTERCEPTORS, useClass: TimeoutInterceptor, multi: true }
];