import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HTTP_INTERCEPTORS,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { TokenService } from '../../services/token.service';
import { environment } from 'src/environments/environment';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {
  constructor(private tokenService: TokenService) {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    let newRequest = request;
    const token = this.tokenService.getToken();
    if (token != null) {
      newRequest = request.clone({
        headers: request.headers.set(
          environment.jwtAuthorization.authText,
          `${environment.jwtAuthorization.tokenText} ${token}`
        ),
      });
    }
    return next.handle(newRequest);
  }
}

export const JwtInterceptorProvider = [
  {
    provide: HTTP_INTERCEPTORS,
    useClass: JwtInterceptor,
    multi: true,
  },
];
