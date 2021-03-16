import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CustomerDetailDto } from '../models/customer-detail-dto';
import { listResponseModel } from '../models/listResponseModel';

@Injectable({
  providedIn: 'root'
})
export class CustomerDetailDtoService {

  apiUrl = 'https://localhost:44339/api/customers/getcustomerdetails';

  constructor(private httpClient : HttpClient) { }
  getCustomerDetailDtos(): Observable<listResponseModel<CustomerDetailDto>>{
    return this.httpClient.get<listResponseModel<CustomerDetailDto>>(this.apiUrl);
  }
}
