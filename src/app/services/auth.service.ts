import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Customer } from '../models/customer';
import { LoginModel } from '../models/login';
import { Register } from '../models/register';
import { SingleResponseModel } from '../models/singleResponseModel';
import { TokenModel } from '../models/tokenModel';
import { LocalStorageService } from './local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
 

  apiUrl = 'https://localhost:44339/api/auth/';
  constructor(private httpClient:HttpClient, private localStorageService: LocalStorageService) { }

  login(loginModel: LoginModel): Observable<SingleResponseModel<TokenModel>> {
    let newPath = this.apiUrl + 'login';
    return this.httpClient.post<SingleResponseModel<TokenModel>>(newPath, loginModel);
 }
  register(register: Register): Observable<SingleResponseModel<TokenModel>> {
    let newPath = this.apiUrl + 'register';
    return this.httpClient.post<SingleResponseModel<TokenModel>>(newPath, register);
 }
 update(customer: Customer): Observable<SingleResponseModel<TokenModel>> {
    let newPath = this.apiUrl + 'update';
    return this.httpClient.put<SingleResponseModel<TokenModel>>(newPath, customer);
 }

 isAuthenticated(): boolean {
  return !!this.localStorageService.getToken();
}

  // isAuthenticated(){ //giriş yapan kişinin authentica olup olmadığı kontrol eder. Tarayının tokei hatırlaması için localStorage de tutuyoruz.
  //   if(localStorage.getItem("token")){
  //     return true;
  //   }
  //   else{
  //     return false;
  //   }
  // }
}
