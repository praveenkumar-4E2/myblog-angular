import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PublicService {

  private category_URL = "http://localhost:8080/category/";
  private subject_URL = "http://localhost:8080/subject/";
  constructor(private httpClient:HttpClient) { }
  getCategorySubject()
  {
    return this.httpClient.get<any>(this.category_URL+"subject/list")
  }
  getAllSubject(subjectId:any)
  {
    return this.httpClient.get<any>(this.subject_URL+subjectId);
  }
}
