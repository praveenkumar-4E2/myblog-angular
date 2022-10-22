import { Component, OnInit } from '@angular/core';
import { Form } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { BlogService } from '../../http/blog.service';
import { PageService } from '../../http/page.service';
import { Page } from '../../models/page';
import Quill from "quill";
import ResizeModule from "@botom/quill-resize-module";

Quill.register("modules/resize", ResizeModule,);

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.css']
})
export class PageComponent implements OnInit {

  topicId:any;
  topicName:any;
  pageDto!:Page[];
  page=new Page();

  showForm = false;
  saveMethod = false;

  title:any;
  pageId:any;
  content:any;
  modules={}

  constructor(private route:ActivatedRoute,private blogService:BlogService,private pageService:PageService) { }

  ngOnInit(): void {

    this.modules={
      resize: {
        locale: {}
      },
    

    };


    
    this.route.params.subscribe((data) => {
      this.topicId = data['topicId'];
      this.topicName = data['topicName'];
    
    }
    )
    this.blogService.getPageDto(this.topicId).subscribe((data: Page[])=> {
      this.pageDto = data;
    
    }
    )
  }

  enableForm() {
    this.showForm = true;
  }

  disableForm() {
    this.showForm = false;
    this.disableFields();
  }
  enableSave() {
    this.saveMethod = true;
    
  }

  disableFields() {
    
    this.title=null;
    this.content=null;
  }

  setPage(page: Page) {
  this.title=page.title;
   this.pageId=page.pageId;
   this.content=page.content;
    this.enableForm();
  }

  onSubmitSave(form: Form) {
    this.disableForm();
    if (this.saveMethod == true) {
      this.addPage(form, this.topicId);
      this.saveMethod = false;
    }
    else {
      this.updatePage(form,this.pageId);
      
    }

  }

  addPage(page: any, topicId: any) {
    this.blogService.savePage(page, topicId).subscribe((data) => {
    

      this.ngOnInit();
    });
  }

  updatePage(page:any,pageId:any)
  {
    this.pageService.updatePage(page,pageId).subscribe((data=>{
    
      this.ngOnInit();
    }));
  }
  deletePage(pageId:any)
  {
    this.pageService.deletePage(pageId).subscribe((data=>{
      this.ngOnInit();
    }))
  }



  
}
