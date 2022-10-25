import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PrivateRoutingModule } from './private-routing.module';
import { PrivateComponent } from './private.component';
import { BlogHomeComponent } from './components/blog-home/blog-home.component';

import { SubjectComponent } from './components/subject/subject.component';
import { HttpClientModule } from '@angular/common/http';
import { TopicComponent } from './components/topic/topic.component';
import { PageComponent } from './components/page/page.component';
import { ViewpageComponent } from './components/viewpage/viewpage.component';
import { AddCategoryComponent } from './components/add-category/add-category.component';
import { AddSubjectComponent } from './components/add-subject/add-subject.component';
import { AddtopicComponent } from './components/addtopic/addtopic.component';
import { AddpageComponent } from './components/addpage/addpage.component';
import { FormsModule } from '@angular/forms';
import { QuillModule } from 'ngx-quill';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    PrivateComponent,
    BlogHomeComponent,
    
    SubjectComponent,
         TopicComponent,
         PageComponent,
         ViewpageComponent,
         AddCategoryComponent,
         AddSubjectComponent,
         AddtopicComponent,
         AddpageComponent,
         
  ],
  imports: [
    CommonModule,
    PrivateRoutingModule,
    HttpClientModule,
    FormsModule,
    SharedModule,
    QuillModule.forRoot()

  ]
})
export class PrivateModule { }
