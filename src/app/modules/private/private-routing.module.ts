import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddCategoryComponent } from './components/add-category/add-category.component';
import { BlogHomeComponent } from './components/blog-home/blog-home.component';
import { PageComponent } from './components/page/page.component';
import { SubjectComponent } from './components/subject/subject.component';
import { TopicComponent } from './components/topic/topic.component';
import { ViewpageComponent } from './components/viewpage/viewpage.component';
import { PrivateComponent } from './private.component';

const routes: Routes = [
  {
    path: 'category',
    component:PrivateComponent,
    children:[
      {
        path:"home",
        component:BlogHomeComponent
      },
      {
        path:"subject/:categoryId/:categoryName",
        component:SubjectComponent
      },
      {
        path:"topic/:subjectId/:subjectName",
        component:TopicComponent
      },
      {
        path:"page/:topicId/:topicName",
        component:PageComponent
      },
      {
        path:"viewpage/:pageId",
        component:ViewpageComponent
      },
      {
        path:"addcategory",
        component:AddCategoryComponent
      }
    ]
  },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PrivateRoutingModule { }
