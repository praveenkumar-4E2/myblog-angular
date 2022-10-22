import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Page } from '../../models/page';
import { Subject } from '../../models/subject';

@Component({
  selector: 'app-publiccontentleft',
  templateUrl: './publiccontentleft.component.html',
  styleUrls: ['./publiccontentleft.component.css']
})
export class PubliccontentleftComponent implements OnInit {

  @Input()
  subjectData!: Subject;

  @Output()
  pageData=new EventEmitter<Page>();
  constructor() { }

  ngOnInit(): void {
    
  }

  onPageSelected(page:Page){
    this.pageData.emit(page);
  }

}
