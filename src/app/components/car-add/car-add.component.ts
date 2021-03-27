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

  carAddForm : FormGroup;
  categories : Category[];
  brands : Brand[];
  colors : Color[];

  selectedCategory : Category;
  selectedBrand : Brand;
  selectedColor : number;
  
  constructor( private formBuilder : FormBuilder,
    private carService : CarService,
    private categoriyService : CategoryService,
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
      categoryName : ["", Validators.required],
      carName : ["", Validators.required],
      brandName : ["", Validators.required],
      //brandModel : ["", Validators.required],
      colorId : ["", Validators.required],      
      modelYear : ["", Validators.required],
      dailyPrice : ["", Validators.required],
      description : ["", Validators.required]
    })
  }
  getCategories(){
    this.categoriyService.getCategories().subscribe(response => {
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
      this.carAddForm.addControl("brandId",new FormControl(this.carAddForm.get("brand").value.brandId, Validators.required))
      this.carAddForm.addControl("colorId",new FormControl(this. selectedColor , Validators.required))
      this.carAddForm.addControl("categoryId",new FormControl(this.carAddForm.get("category").value.categoryId, Validators.required))
      let carModel = Object.assign({},this.carAddForm.value)
      this.carService.add(carModel).subscribe(response =>{        
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
  selectColorChange(selectColor: string) {
    this.selectedColor = parseInt(selectColor);
    console.log(selectColor);
  }
}
//this.carAddForm.get("color").value.colorId
