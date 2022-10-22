import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PrivateModule } from './modules/private/private.module';
import { HttpClientModule } from '@angular/common/http';
import { QuillModule } from 'ngx-quill'
import { PublicModule } from './modules/public/public.module';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PrivateModule,
    PublicModule,
    HttpClientModule,
    QuillModule.forRoot(),
    QuillModule,

  ],
  providers: [HttpClientModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
