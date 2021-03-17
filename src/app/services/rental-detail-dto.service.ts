import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { listResponseModel } from '../models/listResponseModel';
import { RentalDetailDto } from '../models/rental-detail-dto';

@Injectable({
  providedIn: 'root'
})
export class RentalDetailDtoService {

  apiUrl = 'https://localhost:44339/api/rentals/getrentaldetails';

  constructor(private httpClient : HttpClient) { }
  getRentalDetailDtos(): Observable<listResponseModel<RentalDetailDto>>{
    return this.httpClient.get<listResponseModel<RentalDetailDto>>(this.apiUrl);
  }
}
