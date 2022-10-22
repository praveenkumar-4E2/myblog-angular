import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SubjectserviceService {

  private subject_URL = "https://myblog-praveen.herokuapp.com/subject/";

  constructor(private httpClient:HttpClient) { }



  public deleteSubject(subjectId: any) {
    return this.httpClient.delete<any>(this.subject_URL+subjectId,{ responseType: 'text' as 'json'});
  }
  public updateSubject(subject:any,subjectId:any) {
    return this.httpClient.put<any>(this.subject_URL+"update/"+subjectId,subject);
  }
}
