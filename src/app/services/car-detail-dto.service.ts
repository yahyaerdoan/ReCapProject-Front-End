import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CarDetailDto } from '../models/car-detail-dto';
import { listResponseModel } from '../models/listResponseModel';

@Injectable({
  providedIn: 'root'
})
export class CarDetailDtoService {

  apiUrl = 'https://localhost:44339/api/cars';

  constructor(private httpClient : HttpClient) { }
  
  getCarDetailDtos(): Observable<listResponseModel<CarDetailDto>>{
    let newPath = this.apiUrl + '/getcarsdetails';
    return this.httpClient.get<listResponseModel<CarDetailDto>>(newPath);
  }
  getCarsByCar(carId : number): Observable<listResponseModel<CarDetailDto>> {
    let newPath = this.apiUrl + '/GetCarsDetailsByCarId?carId=' + carId;
    return this.httpClient.get<listResponseModel<CarDetailDto>>(newPath);
  }  
  getCarsByCategory(categoryId : number): Observable<listResponseModel<CarDetailDto>> {
    let newPath = this.apiUrl + '/GetCarsDetailsByCategoryId?categoryId=' + categoryId;
    return this.httpClient.get<listResponseModel<CarDetailDto>>(newPath);
  }
  getCarsByBrand(brandId : number): Observable<listResponseModel<CarDetailDto>> {
    let newPath = this.apiUrl + '/GetCarsDetailsByBrandId?brandId=' + brandId;
    return this.httpClient.get<listResponseModel<CarDetailDto>>(newPath);
  }
  getCarsByColor(colorId : number): Observable<listResponseModel<CarDetailDto>> {
    let newPath = this.apiUrl + '/GetCarsDetailsByColorId?colorId=' + colorId;
    return this.httpClient.get<listResponseModel<CarDetailDto>>(newPath);
  }  
}
