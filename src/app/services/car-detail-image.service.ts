import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CarDetailDto } from '../models/car-detail-dto';
import { listResponseModel } from '../models/listResponseModel';

@Injectable({
  providedIn: 'root'
})
export class CarDetailImageService {

  apiUrl = 'https://localhost:44339/api/cars';

  constructor(private httpClient : HttpClient) { }

  getImagesByCar(carId : number): Observable<listResponseModel<CarDetailDto>> {
    let newPath = this.apiUrl + '/getimagebycarid?carId=' + carId;
    return this.httpClient.get<listResponseModel<CarDetailDto>>(newPath);
    }
}
