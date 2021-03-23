import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CarDetailDtoComponent } from '../components/car-detail-dto/car-detail-dto.component';
import { Car } from '../models/car';
import { listResponseModel } from '../models/listResponseModel';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  apiUrl = 'https://localhost:44339/api/cars';
  constructor(private httpClient: HttpClient) {}

  getCars(): Observable<listResponseModel<Car>> {
    let newPath = this.apiUrl + '/getall';
    return this.httpClient.get<listResponseModel<Car>>(newPath);
  }

  
  // getCarDetailDtos(): Observable<listResponseModel<CarDetailDtoComponent>>{
  //   let newPath = this.apiUrl + '/getcarsdetails';
  //   return this.httpClient.get<listResponseModel<CarDetailDtoComponent>>(newPath);
  // }
  // getCarsByCar(carId : number): Observable<listResponseModel<Car>> {
  //   let newPath = this.apiUrl + '/GetCarsDetailsByCarId?carId=' + carId;
  //   return this.httpClient.get<listResponseModel<Car>>(newPath);
  // }  
  // getCarsByCategory(categoryId : number): Observable<listResponseModel<Car>> {
  //   let newPath = this.apiUrl + '/GetCarsByCategoryId?categoryId=' + categoryId;
  //   return this.httpClient.get<listResponseModel<Car>>(newPath);
  // }
  // getCarsByBrand(brandId : number): Observable<listResponseModel<Car>> {
  //   let newPath = this.apiUrl + '/GetCarsByBrandId?brandId=' + brandId;
  //   return this.httpClient.get<listResponseModel<Car>>(newPath);
  // }
  // getCarsByColor(colorId : number): Observable<listResponseModel<Car>> {
  //   let newPath = this.apiUrl + '/GetCarsByColorId?colorId=' + colorId;
  //   return this.httpClient.get<listResponseModel<Car>>(newPath);
  // }
}
