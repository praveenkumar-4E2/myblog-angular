import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PrivateModule } from './modules/private/private.module';
import { HttpClientModule } from '@angular/common/http';
import { QuillModule } from 'ngx-quill'
import { PublicModule } from './modules/public/public.module';
import { SafePipe } from './safe.pipe';

import { SharedModule } from './modules/shared/shared.module';
@NgModule({
  declarations: [
    AppComponent,
    SafePipe,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PrivateModule,
    PublicModule,
    HttpClientModule,
    QuillModule.forRoot(),
    QuillModule,
    SharedModule

  ],
 
  providers: [HttpClientModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
