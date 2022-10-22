import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PageService {

  private page_URL = "https://myblog-praveen.herokuapp.com/page/";
  constructor(private httpClient:HttpClient) { }
  public deletePage(pageId: any) {
    return this.httpClient.delete<any>(this.page_URL+pageId,{ responseType: 'text' as 'json'});
  }
  public updatePage(page:any,pageId:any) {
    return this.httpClient.put<any>(this.page_URL+pageId,page);
  }
}
