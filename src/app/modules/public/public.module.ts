import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PublicRoutingModule } from './public-routing.module';
import { PublicComponent } from './public.component';
import { PublichomeComponent } from './components/publichome/publichome.component';
import { PublicheroComponent } from './components/publichero/publichero.component';
import { PublicnavbarComponent } from './components/publicnavbar/publicnavbar.component';
import { PublicfooterComponent } from './components/publicfooter/publicfooter.component';
import { PubliccontentComponent } from './components/publiccontent/publiccontent.component';
import { HttpClientModule } from '@angular/common/http';
import { PubliccontentleftComponent } from './components/publiccontentleft/publiccontentleft.component';
import { PubliccontentroghtComponent } from './components/publiccontentroght/publiccontentroght.component';
import { PubliccontentdataComponent } from './components/publiccontentdata/publiccontentdata.component';
import { FormsModule, NgForm } from '@angular/forms';
import { SafePipe } from 'src/app/safe.pipe';


@NgModule({
  declarations: [
    PublicComponent,
    PublichomeComponent,
    PublicheroComponent,
    PublicnavbarComponent,
    PublicfooterComponent,
    PubliccontentComponent,
    PubliccontentleftComponent,
    PubliccontentroghtComponent,
    PubliccontentdataComponent
  ],
  imports: [
    CommonModule,
    PublicRoutingModule,
    HttpClientModule,
    FormsModule,
    SafePipe
  
  ]
})
export class PublicModule { }
