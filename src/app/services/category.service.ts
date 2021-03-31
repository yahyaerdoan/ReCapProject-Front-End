import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Category } from '../models/category';
import { listResponseModel } from '../models/listResponseModel';
import { responseModel } from '../models/responseModel';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  apiUrl = "https://localhost:44339/api/categories";

  constructor(private httpClient : HttpClient) { }
  
  getCategories(): Observable<listResponseModel<Category>>{
    let newPath = this.apiUrl + "/getall"
    return this.httpClient.get<listResponseModel<Category>>(newPath);
  }
  add(category : Category):  Observable<responseModel> {
    let newPath = this.apiUrl + "/add";
    return this.httpClient.post<responseModel>(newPath, category)
  }
  update(category : Category):  Observable<responseModel> {
    let newPath = this.apiUrl + "/update";
    return this.httpClient.put<responseModel>(newPath, category)
  }
  delete(category : Category):Observable<responseModel>{    
    let newPath = this.apiUrl + "/delete";      
    return this.httpClient.put<responseModel>(newPath, category);
    
  }
}
