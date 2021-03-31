import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Car } from '../models/car';
import { listResponseModel } from '../models/listResponseModel';
import { responseModel } from '../models/responseModel';

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
  add(car : Car):  Observable<responseModel> {
    let newPath = this.apiUrl + "/add";
    return this.httpClient.post<responseModel>(newPath, car)
  }
  update(car : Car):  Observable<responseModel> {
    let newPath = this.apiUrl + "/update";
    return this.httpClient.put<responseModel>(newPath, car)
  }
  delete(car : Car):Observable<responseModel>{    
    let newPath = this.apiUrl + "/delete";    
    return this.httpClient.put<responseModel>(newPath, car);
  }
}
