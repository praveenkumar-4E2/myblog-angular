import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CategoryDto } from '../models/category-dto';
import { SubjectDto } from '../models/subject-dto';
import { TopicDto } from '../models/topic-dto';
import { Subject } from '../models/subject';
import { Topic } from '../models/topic';
import { Category } from '../models/category';
import { PageDto } from '../models/page-dto';
import { Page } from '../models/page';

@Injectable({
  providedIn: 'root'
})
export class BlogService {
  getPage(pageId: any) {
    throw new Error('Method not implemented.');
  }
  private category_URL = "http://localhost:8080/category/";
  private subject_URL = "http://localhost:8080/subject/";
  private topic_URL = "http://localhost:8080/topic/";
  private page_URL = "http://localhost:8080/page/";


  constructor(private httpClient: HttpClient) { }

  public getCategoryDto(): Observable<CategoryDto[]> {
    return this.httpClient.get<CategoryDto[]>(this.category_URL + "list");
  }

  public getSubjectDto(categoryId:any): Observable<SubjectDto[]> {
    return this.httpClient.get<SubjectDto[]>(this.category_URL + "subject/list/"+categoryId);
  }

  public getTopicDto(subjectId:any): Observable<TopicDto[]> {
    return this.httpClient.get<TopicDto[]>(this.subject_URL + "topic/list/"+subjectId);
  }
  public getPageDto(topicId:any): Observable<Page[]> {
    return this.httpClient.get<Page[]>(this.topic_URL + "page/list/"+topicId);
  }
  public getPageData(pageId:any): Observable<Page> {
    return this.httpClient.get<Page>(this.page_URL +pageId);
  }

  saveCategory(category: Category, categoryId: any) {
    return this.httpClient.post(this.category_URL + categoryId, category)
  }

  saveSubject(subject: any, categoryId: any) {
    return this.httpClient.put<any>(this.category_URL+ "addsubject/"+categoryId, subject)
  }

  saveTopic(topic: Topic, subjectId: any) {
    return this.httpClient.put<any>(this.subject_URL+"topic/" + subjectId, topic)
  }
  savePage(page: Page, topicId: any) {
    return this.httpClient.put<any>(this.topic_URL+"page/" + topicId, page)
  }









}
