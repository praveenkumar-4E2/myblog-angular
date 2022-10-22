import { Component, OnInit } from '@angular/core';
import { Form } from '@angular/forms';
import { Category } from '../../models/category';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css']
})
export class AddCategoryComponent implements OnInit {

 category:Category=new Category();
 categoryName="praveen";
 showForm=false;
  constructor() { }

  ngOnInit(): void {
  }
  onSubmitSave(category:Form){
    
  }
  onEditForm()
  {
    this.showForm=!this.showForm;
  }

}
