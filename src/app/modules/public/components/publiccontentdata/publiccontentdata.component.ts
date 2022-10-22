import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Page } from '../../models/page';
import { Subject } from '../../models/subject';
import { PublicService } from '../../service/public.service';

@Component({
  selector: 'app-publiccontentdata',
  templateUrl: './publiccontentdata.component.html',
  styleUrls: ['./publiccontentdata.component.css']
})
export class PubliccontentdataComponent implements OnInit {
  showNav=false;

  pageData:any;
  constructor(private route: ActivatedRoute,private publicService:PublicService) { }
subjectId:any;
subject!:Subject;
  ngOnInit(): void {
    this.route.params.subscribe((data) => {
      this.subjectId = data['subjectId'];
      this.getSubjectData(this.subjectId);
    
      
    })
  }

  getSubjectData(subjectId:any)
  {
    this.publicService.getAllSubject(subjectId).subscribe(data=>{
      this.subject=data;
      this.pageData=this.subject.topic[0].pages[0];
    });
  }

  toggleNav()
  {
    this.showNav=true;
  }

  pageSelectedData(page:Page){

    this.pageData=page;
    this.showNav=false;
    
  }
}
