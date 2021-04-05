import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { LocalStorageService } from '../services/local-storage.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  

  // Bizim bütü isteklerimizi token ile birlikte yolluyor.
  // intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<unknown>> {
  //   let token = localStorage.getItem("token");
  //   let newRequest : HttpRequest<any>;
  //   newRequest = request.clone({
  //     headers : request.headers.set("Authorization", "Bearer " + token)
  //   })
  //   return next.handle(newRequest);
  // }
  
  constructor(private localStorageService: LocalStorageService) {
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<unknown>> {
     let tokenModel = this.localStorageService.getToken();

     if (!tokenModel) {
        return next.handle(request);
     }

     let newRequest: HttpRequest<any>;

     newRequest = request.clone({
        headers: request.headers.set('Authorization', 'Bearer ' + tokenModel.token)
     });

     return next.handle(newRequest);
  }
}
