import { Component, OnInit } from '@angular/core';
import { Form } from '@angular/forms';
import { BlogService } from '../../http/blog.service';
import { CategoryService } from '../../http/category.service';
import { Category } from '../../models/category';
import { CategoryDto } from '../../models/category-dto';

@Component({
  selector: 'app-blog-home',
  templateUrl: './blog-home.component.html',
  styleUrls: ['./blog-home.component.css']
})
export class BlogHomeComponent implements OnInit {

  categoryDto!: CategoryDto[];
  newupdatedCategory=new CategoryDto();
  categoryId!:any;
  categoryName: any;
  showForm = false;
  saveMethod = false;


  constructor(private blogService: BlogService,private categoryservice:CategoryService) { }

  ngOnInit(): void {
    this.requestCategoryData();
  }

 

  onSubmitSave(form: Form) 
  {
    
    this.disableForm();
    this.categoryName=null;
   
    if (this.saveMethod == true) {
      this.addCategory(form);
      this.saveMethod = false;
      
    }
    else {
    
     
      this.updateCategory(form,this.newupdatedCategory.categoryId);
      
    }
  }

  enableForm() {
    this.showForm = true;
  }
  disableForm() {
    this.showForm = false;
  }


  enableSave() {
    this.saveMethod = true;
    
  }


  setCategoryDto(cat:CategoryDto) {
    this.categoryName = cat.categoryName;
    this.newupdatedCategory=cat;
    
  }

  requestCategoryData()
  {
    this.blogService.getCategoryDto().subscribe((data: CategoryDto[]) => {

      this.categoryDto = data;
    }
    )
  }

  addCategory(category: any)
  {
    this.categoryservice.addCategory(category).subscribe((data:any)=>
    {
      this.ngOnInit();

    })
  }

  deleteCategory(categoryId:any){
    this.categoryservice.deleteCategory(categoryId).subscribe((data:any)=>
    {
      
      this.ngOnInit()
        })
    
  }

  updateCategory(category:any,categoryId:any)
  {
    this.categoryservice.updateCategory(category,categoryId).subscribe((data)=>{
      this.ngOnInit();
    }
    )
  }
}

