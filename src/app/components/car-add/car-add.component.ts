import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from "@angular/forms"
import { ToastrService } from 'ngx-toastr';
import { Brand } from 'src/app/models/brand';
import { Category } from 'src/app/models/category';
import { Color } from 'src/app/models/color';
import { BrandService } from 'src/app/services/brand.service';
import { CarService } from 'src/app/services/car.service';
import { CategoryService } from 'src/app/services/category.service';
import { ColorService } from 'src/app/services/color.service';

@Component({
  selector: 'app-car-add',
  templateUrl: './car-add.component.html',
  styleUrls: ['./car-add.component.css']
})
export class CarAddComponent implements OnInit {  

  categories : Category[];
  brands : Brand[];
  colors : Color[];
  carAddForm : FormGroup;
  
  
  constructor( private formBuilder : FormBuilder,
    private carService : CarService,
    private categoryService : CategoryService,
    private brandService : BrandService,
    private colorService :ColorService,
    private toastrService : ToastrService,) { }

  ngOnInit(): void {
    this. createCarAddForm();
    this.getCategories();
    this.getBrands();
    this.getColors();
  }
    createCarAddForm(){
    this.carAddForm = this.formBuilder.group({
      categoryId : ["", Validators.required],
      carName : ["", Validators.required],
      brandId : ["", Validators.required],
      brandModel : ["", Validators.required],
      colorId : ["", Validators.required],      
      modelYear : ["", Validators.required],
      dailyPrice : ["", Validators.required],
      description : ["", Validators.required]
    })
  }
  getCategories(){
    this.categoryService.getCategories().subscribe(response => {
      this.categories = response.data
    })
  }
  getBrands(){
    this.brandService.getBrands().subscribe(response => {
      this.brands = response.data
    })
  }
  getColors(){
    this.colorService.getColors().subscribe(response => {
      this.colors = response.data
    })
  }
  add(){
    if(this.carAddForm.valid){     
      let carModel = Object.assign({},this.carAddForm.value)
      this.carService.add(carModel).subscribe(response =>{ 
        console.log(response)       
        this.toastrService.success(response.message, "Başarılı")
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
}
