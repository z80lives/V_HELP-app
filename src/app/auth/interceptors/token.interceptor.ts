import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor, HttpErrorResponse
} from '@angular/common/http';
import {BehaviorSubject, catchError, Observable, of, throwError} from 'rxjs';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  private isRefreshing = false;
  private refreshTokenSubject: BehaviorSubject<any> = new BehaviorSubject<any>(null);

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler):
    Observable<HttpEvent<unknown>> {

    const token = localStorage.getItem('token');
    const tokenObject = JSON.parse(token??'{}');
    if (token) {
      request = request.clone({
        setHeaders: {
          Authorization: `Bearer ${tokenObject.accessToken}`,
        },
      });
    }

    // return next.handle(request);
    return next.handle(request).pipe(catchError(error => {
      if (error instanceof HttpErrorResponse
        && !request.url.includes('auth/login') && error.status === 401) {
        return this._handle401Error(request, next);
      }

      return throwError(error);
    }));
  }

  private _handle401Error(request: HttpRequest<unknown>, next: HttpHandler)
  : Observable<any> {
    this.refreshTokenSubject.next(null);
    return of(undefined);
  }
}
