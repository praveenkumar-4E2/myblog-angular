import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PrivateModule } from './modules/private/private.module';
import { HttpClientModule } from '@angular/common/http';
import { QuillModule } from 'ngx-quill'
import { PublicModule } from './modules/public/public.module';
import { SafePipe } from './safe.pipe';
@NgModule({
  declarations: [
    AppComponent,
    SafePipe
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
  exports: [
  SafePipe
  ],
  providers: [HttpClientModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
