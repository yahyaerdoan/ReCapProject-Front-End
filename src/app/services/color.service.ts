import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Color } from '../models/color';
import { listResponseModel } from '../models/listResponseModel';

@Injectable({
  providedIn: 'root'
})
export class ColorService {


  apiUrl = 'https://localhost:44339/api/colors/getall';

  constructor(private httpClient : HttpClient) { }
  getColors(): Observable<listResponseModel<Color>>{
    return this.httpClient.get<listResponseModel<Color>>(this.apiUrl);
  }
}
