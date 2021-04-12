import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Image } from '../models/image';
import { listResponseModel } from '../models/listResponseModel';
import { responseModel } from '../models/responseModel';
import { SingleResponseModel } from '../models/singleResponseModel';

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
  add(image:FormData):Observable<SingleResponseModel<Image>> {
    let newPath = this.apiUrl + "/add";
    return this.httpClient.post<SingleResponseModel<Image>>(newPath, image );
  }
  delete(imagery:FormData){
    let newPath = this.apiUrl + "/delete";
    return this.httpClient.post<responseModel>(newPath, imagery);
  }
}
