import {
  HttpInterceptor,
  HttpHandler,
  HttpEvent,
  HttpRequest,
  HttpErrorResponse,
} from '@angular/common/http';
import { retry, catchError, map } from 'rxjs/operators';
import { Injectable, Inject } from '@angular/core';
import { Observable, throwError } from 'rxjs';

@Injectable()
export class ApiInterceptor implements HttpInterceptor {
  constructor(
    @Inject('AUTH_API_URL') private authApiUrl: string,
    @Inject('BASE_API_URL') private baseUrl: string,
    @Inject('FLUSK_API_URL') private fluskUrl: string
  ) {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    let checkUrl = request.url.split('/');

    request = request.clone({
      url: `${
        checkUrl[1] === 'robot'
          ? this.baseUrl
          : checkUrl[1] === 'User'
          ? this.authApiUrl
          : this.fluskUrl
      }${request.url}`,
    });
    // request = request.clone({
    //   headers: request.headers.set(
    //     'Authorization',
    //     'Bearer ' + localStorage.getItem('accessToken')
    //   ),
    // });

    // request = request.clone({ url: `${this.baseUrl}${request.url}` });
    request = request.clone({
      headers: request.headers.set('Content-Type', 'application/json'),
    });
    request = request.clone({
      headers: request.headers.set('Accept', 'application/json'),
    });

    // Use for middleware
    return next.handle(request).pipe(
      retry(0),
      catchError((error: HttpErrorResponse) => {
        return throwError(error);
      })
    );
  }
}
