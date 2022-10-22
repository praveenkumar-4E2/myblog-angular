import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TopicService {

  private subject_URL = "http://localhost:8080/topic/";

  constructor(private httpClient:HttpClient) { }



  public deleteTopic(topicId: any) {
    return this.httpClient.delete<any>(this.subject_URL+topicId,{ responseType: 'text' as 'json'});
  }
  public updateTopic(topic:any,topicId:any) {
    return this.httpClient.put<any>(this.subject_URL+"update/"+topicId,topic);
  }
}
