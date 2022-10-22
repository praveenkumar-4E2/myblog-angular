import { Component, OnInit } from '@angular/core';
import { Subjectcategorylist } from '../../models/subjectcategorylist';
import { PublicService } from '../../service/public.service';

@Component({
  selector: 'app-publichome',
  templateUrl: './publichome.component.html',
  styleUrls: ['./publichome.component.css']
})
export class PublichomeComponent implements OnInit {

  constructor(private publicService:PublicService) { }
  subjectcategorylist!:Subjectcategorylist[];

  ngOnInit(): void {
    this.getCategorySubjectList();
  }

  getCategorySubjectList()
  {
    this.publicService.getCategorySubject().subscribe(data=>this.subjectcategorylist=data);
  }

}
