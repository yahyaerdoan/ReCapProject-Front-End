import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Brand } from 'src/app/models/brand';
import { Car } from 'src/app/models/car';
import { Category } from 'src/app/models/category';
import { Color } from 'src/app/models/color';
import { BrandService } from 'src/app/services/brand.service';
import { CarService } from 'src/app/services/car.service';
import { CategoryService } from 'src/app/services/category.service';
import { ColorService } from 'src/app/services/color.service';

@Component({
  selector: 'app-car-update',
  templateUrl: './car-update.component.html',
  styleUrls: ['./car-update.component.css']
})
export class CarUpdateComponent implements OnInit {

  dataLoaded = false;
  carUpdateForm : FormGroup;

  cars:Car[] = [];
  categories :Category[] = [];
  colors :Color[] = [];
  brands :Brand[] = [];

  carId : number;
  categoryId : number;
  colorId : number;
  brandId : number;

  selectedCategory : Category
  selectedCar : Car
  selectedColor : Color
  selectedBrand : Brand

  constructor(private formBuilder:FormBuilder, 
    private carService: CarService,    
    private activatedRoute: ActivatedRoute,
    private toastrService:ToastrService,
    private categoryService : CategoryService,
    private colorService : ColorService,
    private brandService : BrandService) { }

  ngOnInit(): void {  
    this.activatedRoute.params.subscribe((params) =>{
      if (params["carId"]) {
        this.carId == params["carId"] 

        this.createCarUpdateForm();

        this.getAllCategories();
        this.getAllCars();        
        this.getAllBrands();
        this.getAllColors();        
      }
    });      
  }
  getAllCars()
  {
    this.carService.getCars().subscribe(response =>{
      this.cars = response.data;
      this.dataLoaded = response.success
    });
  }
  getAllBrands()
  {
    this.brandService.getBrands().subscribe(response =>{
      this.brands = response.data;
      this.dataLoaded = response.success
    });
  }
  getAllCategories()
  {
    this.categoryService.getCategories().subscribe(response =>{
      this.categories = response.data;
      this.dataLoaded = response.success
    });
  }
  getAllColors() {
    this.colorService.getColors().subscribe(response=>{
      this.colors = response.data;
      this.dataLoaded = response.success;
    })
  }
  createCarUpdateForm()
  {
    this.carUpdateForm = this.formBuilder.group({
      carId : [this.selectedCar?.carId, Validators.required],
      carName : ["",Validators.required],
      categoryId : [this.selectedCategory?.categoryId, Validators.required],      
      brandId : [this.selectedBrand?.brandId, Validators.required],
      brandModel : ["", Validators.required],
      colorId : [this.selectedColor?.colorId, Validators.required],      
      modelYear : ["", Validators.required],
      dailyPrice : ["", Validators.required],
      description : ["", Validators.required]     
    });
  }
  update() {
    if (this.carUpdateForm.valid) {
      let cartModel = Object.assign({}, this.carUpdateForm.value);
      this.carService.update(cartModel).subscribe((response) => {
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
  setSelectedCar(car:Car){
    this.selectedCar = car;
     
  }  
  getSelectedCar(carId : number) {
    if(this.carId == carId)
    {  
      return true;
    }
    else
    {
      return false;
    }
  }

  setSelectedCategory(category:Category){
    this.selectedCategory = category;
     
  }  
  getSelectedCategory(categoryId : number) {
    if(this.categoryId == categoryId)
    {  
      return true;
    }
    else
    {
      return false;
    }
  }

  setSelectedColor(color:Color){
    this.selectedColor = color;
     
  }  
  getSelectedColor(colorId : number) {
    if(this.colorId == colorId)
    {  
      return true;
    }
    else
    {
      return false;
    }
  }
  setSelectedBrand(brand:Brand){
    this.selectedBrand = brand;
     
  }  
  getSelectedBrand(brandId : number) {
    if(this.brandId == brandId)
    {  
      return true;
    }
    else
    {
      return false;
    }
  }
}
