import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Payment } from '../models/payment';
import { responseModel } from '../models/responseModel';

@Injectable({
  providedIn: 'root'
})

export class PaymentService {
  apiUrl = 'https://localhost:44339/api/Payments';

  constructor(private httpClient: HttpClient) {}
     
  payment(payment : Payment ):  Observable<responseModel> {
    let newPath = this.apiUrl + "/Payment";
    return this.httpClient.post<responseModel>(newPath, payment)
  }
  
}
