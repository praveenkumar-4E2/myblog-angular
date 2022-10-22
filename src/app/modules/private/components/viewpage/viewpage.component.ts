import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BlogService } from '../../http/blog.service';
import { Page } from '../../models/page';
import { PageDto } from '../../models/page-dto';

@Component({
  selector: 'app-viewpage',
  templateUrl: './viewpage.component.html',
  styleUrls: ['./viewpage.component.css']
})
export class ViewpageComponent implements OnInit {

  pageId:any;
  page: Page = new Page;
  constructor(private route:ActivatedRoute,private blogService:BlogService) { }

  ngOnInit(): void {
    this.route.params.subscribe((data) => {
      this.pageId = data['pageId'];
    }
    )
    this.blogService.getPageData(this.pageId).subscribe((data: Page)=> {
      this.page = data;
    
    }
    )
  }

}
