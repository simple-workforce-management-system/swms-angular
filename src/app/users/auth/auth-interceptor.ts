import {Injectable} from '@angular/core';
import {AuthService} from './auth.service';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {catchError} from 'rxjs/operators';


@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private authService: AuthService) {
  }


  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next
      .handle(request)
      .pipe(catchError(err => {
        if (err.status === 401) {
          this.authService.logOut();
          location.reload();
        }

        const error = err.error.message || err.statusText;
        return throwError(error);
      }));
  }
}
