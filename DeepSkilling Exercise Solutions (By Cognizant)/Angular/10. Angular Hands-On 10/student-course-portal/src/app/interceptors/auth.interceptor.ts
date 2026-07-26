import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, finalize } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { LoadingService } from '../services/loading.service';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const router = inject(Router);
  const loadingService = inject(LoadingService);

  console.log(`[Interceptor] Outgoing request to: ${req.url}`);
  loadingService.show();

  const authReq = req.clone({
    setHeaders: { Authorization: 'Bearer demo-token' }
  });

  return next(authReq).pipe(
    catchError((error) => {
      console.error('[Interceptor] HTTP Error:', error.message);
      if (error.status === 401) {
        console.error('[Interceptor] 401 Unauthorized - Redirecting to Home');
        router.navigate(['/']);
      }
      return throwError(() => error);
    }),
    finalize(() => {
      loadingService.hide();
    })
  );
};
