import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { listResponseModel } from '../models/listResponseModel';
import { Rental } from '../models/rental';
import { RentalDetailDto } from '../models/rental-detail-dto';
import { SingleResponseModel } from '../models/singleResponseModel';

@Injectable({
  providedIn: 'root'
})
export class RentalDetailDtoService {

  apiUrl = "https://localhost:44339/api/rentals";

  constructor(private httpClient : HttpClient) { }
  
  getRentalDetailDtos(): Observable<listResponseModel<RentalDetailDto>>{
    let newPath = this.apiUrl + "/getrentaldetails";
    return this.httpClient.get<listResponseModel<RentalDetailDto>>(newPath);
  }
  carIsReturned(carId : number): Observable<SingleResponseModel<Rental>>{
    let newPath = this.apiUrl + "/CarIsReturned?carId=" + carId;
    return this.httpClient.get<SingleResponseModel<Rental>>(newPath);
  }  
}
