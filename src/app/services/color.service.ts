import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Color } from '../models/color';
import { listResponseModel } from '../models/listResponseModel';
import { responseModel } from '../models/responseModel';

@Injectable({
  providedIn: 'root'
})
export class ColorService {


  apiUrl = "https://localhost:44339/api/colors";

  constructor(private httpClient : HttpClient) { }
  getColors(): Observable<listResponseModel<Color>>{
    let newPath = this.apiUrl + '/getall';
    return this.httpClient.get<listResponseModel<Color>>(newPath);
  }
  add(color : Color):  Observable<responseModel> {
    let newPath = this.apiUrl + "/add";
    return this.httpClient.post<responseModel>(newPath, color)
  }
  update(color : Color):  Observable<responseModel> {
    let newPath = this.apiUrl + "/update";
    return this.httpClient.put<responseModel>(newPath, color)
  }
  delete(color : Color):Observable<responseModel>{    
    let newPath = this.apiUrl + "/delete";    
    return this.httpClient.put<responseModel>(newPath, color);
  }
}
