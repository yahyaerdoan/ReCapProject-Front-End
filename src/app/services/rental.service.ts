import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CarDetailDto } from '../models/car-detail-dto';
import { listResponseModel } from '../models/listResponseModel';
import { Rental } from '../models/rental';
import { responseModel } from '../models/responseModel';

@Injectable({
  providedIn: 'root'
})
export class RentalService {

  apiUrl = 'https://localhost:44339/api/rentals';

  constructor(private httpClient: HttpClient) { }

  getRentals():Observable<listResponseModel<Rental>> {
    let newPath = this.apiUrl + "/getall";
    return this.httpClient.get<listResponseModel<Rental>>(newPath);
  }

   add(rental : Rental):  Observable<responseModel> {
    let newPath = this.apiUrl + "/add";
    return this.httpClient.post<responseModel>(newPath, rental)
  }

  IsRentable(carId:number):Observable<responseModel>{
    console.log(carId)
    let newPath=this.apiUrl + "/IsRentable?carId="+ carId;
    return this.httpClient.get<responseModel>(newPath);
  }

  FindexScoreCheck(customerId : number, carId : number):Observable<responseModel>{
    let newPath=this.apiUrl + "/FindexScoreCheck?customerId=" + customerId +"&carId=" + carId;
    return this.httpClient.get<responseModel>(newPath);
  }
}
