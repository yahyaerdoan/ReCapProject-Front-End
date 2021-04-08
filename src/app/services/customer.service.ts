import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Customer } from '../models/customer';
import { CustomerDetailDto } from '../models/customer-detail-dto';
import { listResponseModel } from '../models/listResponseModel';
import { responseModel } from '../models/responseModel';
import { SingleResponseModel } from '../models/singleResponseModel';

@Injectable({
  providedIn: 'root',
})
export class CustomerService {
  apiUrl = 'https://localhost:44339/api/customers';

  constructor(private httpClient: HttpClient) {}

  getCustomers(): Observable<listResponseModel<Customer>> {
    let newPath = this.apiUrl + '/getall';
    return this.httpClient.get<listResponseModel<Customer>>(newPath);
  }
  getCustomersByEmail(email: string): Observable<listResponseModel<Customer>> {
    let newPath = this.apiUrl + '/GetCustomersByEmail?email=' + email;
    return this.httpClient.get<listResponseModel<Customer>>(newPath);
  }
  update(customer: Customer): Observable<responseModel> {
    return this.httpClient.put<responseModel>(this.apiUrl, customer);
  }
}
