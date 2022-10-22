import { Component, OnInit } from '@angular/core';
import { Form } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { BlogService } from '../../http/blog.service';
import { SubjectserviceService } from '../../http/subjectservice.service';
import { CategoryDto } from '../../models/category-dto';
import { SubjectDto } from '../../models/subject-dto';

@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
  styleUrls: ['./subject.component.css']
})
export class SubjectComponent implements OnInit {
  categoryId: any;
  categoryName: any;
  subjectdto!: SubjectDto[];
  subjectFields = new SubjectDto();

  subjectId: any;
  subjectName: any;
  subjectImage: any;
  description: any;
  preRequests: any;
  audience: any;

  showForm = false;
  saveMethod = false;

  constructor(private route: ActivatedRoute, private blogService: BlogService, private subjectservice: SubjectserviceService) { }

  ngOnInit(): void {
    this.route.params.subscribe((data) => {
      this.categoryId = data['categoryId'];
      this.categoryName = data['categoryName'];
    }
    )
    this.blogService.getSubjectDto(this.categoryId).subscribe((data: SubjectDto[]) => {
      this.subjectdto = data;
      console.log(this.subjectdto);
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
    console.log("save is enavled")
  }

  disableFields() {
    
    this.subjectName=null;
    this.description= null;
    this.subjectImage= null;
    this.preRequests=null;
    this.audience= null;
  }

  setSubjectDto(subject: SubjectDto) {
    this.subjectFields = subject;
    this.subjectId = subject.subjectId;
    this.subjectName=subject.subjectName;
    this.subjectImage=subject.subjectImage;
    this.description=subject.description;
    this.preRequests=subject.preRequests;
    this.audience=subject.audience;
    this.enableForm();
  }

  onSubmitSave(form: Form) {
    this.disableForm();
    if (this.saveMethod == true) {
      this.addSubject(form, this.categoryId);
      this.saveMethod = false;
    }
    else {
      console.log(this.subjectId);
      this.updateSubject(form,this.subjectId);
    }

  }

  addSubject(subject: any, categoryId: any) {
    this.blogService.saveSubject(subject, categoryId).subscribe((data) => {
    

      this.ngOnInit();
    });
  }

  updateSubject(subject:any,subjectId:any)
  {
    this.subjectservice.updateSubject(subject,subjectId).subscribe((data=>{
    
      this.ngOnInit();
    }));
  }
  deleteSubject(subjectId:any)
  {
    this.subjectservice.deleteSubject(subjectId).subscribe((data=>{
      this.ngOnInit();
    }))
  }

}
