import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Category } from '../models/category';
import { CategoryDto } from '../models/category-dto';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  private category_URL = "http://localhost:8080/category/";
  constructor(private httpClient: HttpClient) { }

  
  public addCategory(category: any) {
    return this.httpClient.post<any>(this.category_URL+"add/",category);
  }

  public deleteCategory(categoryId: any) {
    return this.httpClient.delete<any>(this.category_URL+categoryId,{ responseType: 'text' as 'json'});
  }
  public updateCategory(category:any,categoryId:any) {
    return this.httpClient.put<any>(this.category_URL+"update/"+categoryId,category);
  }
}
