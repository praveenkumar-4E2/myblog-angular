import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PubliccontentComponent } from './components/publiccontent/publiccontent.component';
import { PubliccontentdataComponent } from './components/publiccontentdata/publiccontentdata.component';
import { PublichomeComponent } from './components/publichome/publichome.component';
import { PublicComponent } from './public.component';

const routes: Routes = [
  
  {
    
    path:"home",
    component: PublicComponent,
    children:[
      {
        path:"content",
        component:PubliccontentComponent

      },
      {
        path:"blog/:subjectId",
        component:PubliccontentdataComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PublicRoutingModule { }
