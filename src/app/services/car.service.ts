import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Brand } from '../models/brand';
import { Car } from '../models/car';
import { Color } from '../models/color';
import { listResponseModel } from '../models/listResponseModel';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  apiUrl = 'https://localhost:44339/api/';
  constructor(private httpClient: HttpClient) {}

  getCars(): Observable<listResponseModel<Car>> {
    let newPath = this.apiUrl + 'cars/getall';
    return this.httpClient.get<listResponseModel<Car>>(newPath);
  }

   getCarsByCategory(categoryId : number): Observable<listResponseModel<Car>> {
    let newPath = this.apiUrl + 'cars/getcarsbycategoryId?categoryId=' + categoryId;
    return this.httpClient.get<listResponseModel<Car>>(newPath);
  }
  getCarsByBrand(brandId : number): Observable<listResponseModel<Car>> {
    let newPath = this.apiUrl + 'cars/getcarsbybrandId?brandId=' + brandId;
    return this.httpClient.get<listResponseModel<Car>>(newPath);
  }
  getCarsByColor(colorId : number): Observable<listResponseModel<Car>> {
    let newPath = this.apiUrl + 'cars/getcarsbycolorId?colorId=' + colorId;
    return this.httpClient.get<listResponseModel<Car>>(newPath);
  }
}
