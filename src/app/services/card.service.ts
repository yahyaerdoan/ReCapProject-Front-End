import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Card } from '../models/card';

import { listResponseModel } from '../models/listResponseModel';
import { Payment } from '../models/payment';
import { responseModel } from '../models/responseModel';

@Injectable({
  providedIn: 'root'
})
export class CardService {

  apiUrl = 'https://localhost:44339/api/Cards';

  constructor(private httpClient: HttpClient) {}
     
  getCards(customerId : number): Observable<listResponseModel<Card>> {
    let newPath = this.apiUrl + '/GetCardsByCustomerId?customerId=' + customerId;
    return this.httpClient.get<listResponseModel<Card>>(newPath);
  }

  saveCard(payment : Payment ):  Observable<responseModel> {
    let newPath = this.apiUrl + "/SaveCard";
    return this.httpClient.post<responseModel>(newPath, payment)
  }

}
