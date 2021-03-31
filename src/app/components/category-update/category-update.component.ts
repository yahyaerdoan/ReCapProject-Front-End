import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Category } from 'src/app/models/category';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-category-update',
  templateUrl: './category-update.component.html',
  styleUrls: ['./category-update.component.css']
})
export class CategoryUpdateComponent implements OnInit {

  dataLoaded = false;
  categoryUpdateForm : FormGroup;
  categories:Category[] = [];
  categoryId : number;
  selectedCategory : Category

  constructor(private formBuilder:FormBuilder, 
    private categoryService: CategoryService,
    private router:Router,
    private toastrService:ToastrService) { }

  ngOnInit(): void {    
    this.getAllCategories();
    this.createCategoryUpdateForm();  
  }
  getAllCategories()
  {
    this.categoryService.getCategories().subscribe(response =>{
      this.categories = response.data;
      this.dataLoaded = response.success
    });
  }
  createCategoryUpdateForm()
  {
    this.categoryUpdateForm = this.formBuilder.group({
      categoryId : [this.selectedCategory?.categoryId, Validators.required],
      categoryName : ["",Validators.required]      
    });
  }
  update() {
    if (this.categoryUpdateForm.valid) {
      let brandModel = Object.assign({}, this.categoryUpdateForm.value);
      this.categoryService.update(brandModel).subscribe((response) => {
        this.toastrService.success(response.message, "Başarılı");
      },responseError=>{
        if(responseError.error.ValidationErrors.length>0){
          for (let i = 0; i <responseError.error.ValidationErrors.length; i++) {
            this.toastrService.error(responseError.error.ValidationErrors[i].ErrorMessage,"Doğrulama Hatası")
          }       
        } 
      })      
    }
    else{
      this.toastrService.error("Formunuz  Eksik", "Dikkat")   
    }
  }
  setSelectedCategory(category:Category){
    this.selectedCategory = category;
     
  }  
  getSelectedCategoryId(categoryId : number) {
    if(this.categoryId == categoryId)
    {  
      return true;
    }
    else
    {
      return false;
    }
  }
}
