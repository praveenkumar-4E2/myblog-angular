import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HtmlsafePipe } from './pipes/htmlsafe.pipe';



@NgModule({
  declarations: [
    HtmlsafePipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HtmlsafePipe
  ],
})
export class SharedModule { }
