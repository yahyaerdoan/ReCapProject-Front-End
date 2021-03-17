import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CarDetailDto } from '../models/car-detail-dto';
import { listResponseModel } from '../models/listResponseModel';

@Injectable({
  providedIn: 'root'
})
export class CarDetailDtoService {

  apiUrl = 'https://localhost:44339/api/cars/getcardetails';

  constructor(private httpClient : HttpClient) { }
  getCarDetailDtos(): Observable<listResponseModel<CarDetailDto>>{
    return this.httpClient.get<listResponseModel<CarDetailDto>>(this.apiUrl);
  }
}
