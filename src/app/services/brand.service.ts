import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Brand } from '../models/brand';
import { listResponseModel } from '../models/listResponseModel';
import { responseModel } from '../models/responseModel';

@Injectable({
  providedIn: 'root'
})
export class BrandService {
  
  apiUrl = 'https://localhost:44339/api/brands';

  constructor(private httpClient : HttpClient) { }
  
  getBrands(): Observable<listResponseModel<Brand>>{
    let newPath = this.apiUrl + '/getall';
    return this.httpClient.get<listResponseModel<Brand>>(newPath);
  }
  add(brand : Brand):  Observable<responseModel> {
    let newPath = this.apiUrl + "/add";
    return this.httpClient.post<responseModel>(newPath, brand)
  }
  update(brand : Brand):  Observable<responseModel> {
    let newPath = this.apiUrl + "/update";
    return this.httpClient.put<responseModel>(newPath, brand)
  }
}

