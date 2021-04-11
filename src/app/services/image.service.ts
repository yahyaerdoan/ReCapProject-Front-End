import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Image } from '../models/image';
import { listResponseModel } from '../models/listResponseModel';

@Injectable({
  providedIn: 'root'
})
export class ImageService {

  apiUrl = 'https://localhost:44339/api/images';

  constructor(private httpClient : HttpClient) { }
  
  getImages(carId : number): Observable<listResponseModel<Image>>{
    let newPath = this.apiUrl + "/GetImageByCarId?carId=" + carId;
    return this.httpClient.get<listResponseModel<Image>>(newPath);    
  }

  getAllImages(): Observable<listResponseModel<Image>> {
    let newPath = this.apiUrl + '/getall';
    return this.httpClient.get<listResponseModel<Image>>(newPath);
  }
}
