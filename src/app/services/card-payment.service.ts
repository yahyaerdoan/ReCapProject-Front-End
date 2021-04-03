import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CardPayment } from '../models/cardPayment';
import { Customer } from '../models/customer';
import { listResponseModel } from '../models/listResponseModel';
import { responseModel } from '../models/responseModel';

@Injectable({
  providedIn: 'root'
})
export class CardPaymentService {

  apiUrl = 'https://localhost:44339/api/CardPayments';

  constructor(private httpClient: HttpClient) {}
     
  add(cardPayment : CardPayment):  Observable<responseModel> {
    let newPath = this.apiUrl + "/add";
    return this.httpClient.post<responseModel>(newPath, cardPayment)
  }
  
  getCardPayments(customerId : number): Observable<listResponseModel<CardPayment>> {
    let newPath = this.apiUrl + '/GetCardPaymetsByCustomerId?customerId=' + customerId;
    return this.httpClient.get<listResponseModel<CardPayment>>(newPath);
  }
}
