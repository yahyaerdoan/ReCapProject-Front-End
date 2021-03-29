import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CarDetailDto } from 'src/app/models/car-detail-dto';
import { CarDetailDtoService } from 'src/app/services/car-detail-dto.service';
import { ToastrService } from 'ngx-toastr';
import { RentService } from 'src/app/services/rent.service';
import { Brand } from 'src/app/models/brand';
import { Color } from 'src/app/models/color';
import { Car } from 'src/app/models/car';
import { Category } from 'src/app/models/category';
import { BrandService } from 'src/app/services/brand.service';
import { ColorService } from 'src/app/services/color.service';
import { CategoryService } from 'src/app/services/category.service';
import { CarService } from 'src/app/services/car.service';


@Component({
  selector: 'app-car-detail-dto',
  templateUrl: './car-detail-dto.component.html',
  styleUrls: ['./car-detail-dto.component.css']
})
export class CarDetailDtoComponent implements OnInit {

  carDetailDtos : CarDetailDto[] = [];
  carDetailDto : CarDetailDto;

  categories : Category[] = [];
  cars : Car[] = [];
  brands : Brand[] = [];
  colors : Color[] = [];

  brandId : number;
  colorId : number;
  categoryId : number;
  carId : number;

  filterText ="";
  dataLoaded = false;

  constructor(private carDetailDtoService : CarDetailDtoService,     
    private activatedRoute : ActivatedRoute, 
    private toastrService : ToastrService,
    private rentService : RentService,
    private brandService : BrandService,
    private colorService : ColorService,
    private categoryService : CategoryService,
    private carService : CarService ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      if(params["categoryId"]){this.getCarsDetailsByCategory(params["categoryId"])}
      else if(params["carId"]){this.getCarsDetailsByCar(params["carId"]);}      
      else if(params["brandId"]){this.getCarsDetailsByBrand(params["brandId"])}
      else if(params["colorId"]){this.getCarsDetailsByColor(params["colorId"])}

      else if(params["categoryId"] &&params["carId"] &&params["brandId"] &&params["colorId"])
      {this.getFilterCars(params["categoryId"], params["carId"], params["brandId"], params["colorId"])}     
      
    });
    this.getCarDetailDtos(); 
    this.getColors();
    this.getBrands();  
    this.getCars();  
    this.getCategories();  
  }
  getCarDetailDtos(){
    this.carDetailDtoService.getCarDetailDtos().subscribe((response) =>{
      this.carDetailDtos = response.data;
      this.carDetailDto= response.data[0];      
      this.dataLoaded = true;      
    });
  }

  getCarsDetailsByCategory(categoryId : number){
    this.carDetailDtoService.getCarsByCategory(categoryId).subscribe((response) => {
      this.carDetailDtos = response.data;
      this.dataLoaded = true;
    })
  }
  getCarsDetailsByCar(carId : number){
    this.carDetailDtoService.getCarsByCar(carId).subscribe((response) => {
      this.carDetailDtos = response.data;
      this.dataLoaded = true;      
     })
  }
  getCarsDetailsByBrand(brandId : number){
    this.carDetailDtoService.getCarsByBrand(brandId).subscribe((response) => {
      this.carDetailDtos = response.data;
      this.dataLoaded = true;
     })
  }
  getCarsDetailsByColor(colorId : number){
    this.carDetailDtoService.getCarsByColor(colorId).subscribe((response) => {
      this.carDetailDtos = response.data;
      this.dataLoaded = true;      
    })
  }
  getCars() {
    this.carService.getCars().subscribe((response) => {
      this.cars = response.data;
    });
  }
  getCategories() {
    this.categoryService.getCategories().subscribe((response) => {
      this.categories = response.data;
    });
  }
  getBrands() {
    this.brandService.getBrands().subscribe((response) => {
      this.brands = response.data;
    });
  }

  getColors() {
    this.colorService.getColors().subscribe((response) => {
      this.colors = response.data;
    });
  }
  getFilterCars(categoryId : number, carId : number, brandId : number, colorId : number){
    this.carDetailDtoService.getFilterCars(categoryId, carId, brandId, colorId).subscribe((response)=>{
      this.carDetailDtos = response.data;
      console.log(response)
      if (this.carDetailDtos.length ==0) {
        this.toastrService.error("Herhangi bir eşleşme bulunamadı!")        
      }
    });
  }
  getSelectedCategoryId(categoryId : number) {
    if(this.categoryId == categoryId)
    {
      console.log(this.categoryId);
      return true;
    }
    else
    {
      return false;
    }
  }

  getSelectedCarId(carId : number) {
    if(this.carId == carId)
    {
      console.log(this.carId);
      return true;
    }
    else
    {
      return false;
    }
  }
  getSelectedColorId(colorId : number) {
    if(this.colorId == colorId)
    {
      
      console.log(this.colorId);
      return true;
    }
    else
    {
      return false;
    }
  }

  getSelectedBrandId(brandId : number) {
    if(this.brandId == brandId)
    {
      console.log(this.brandId);
      return true;
    }
    else
    {
      return false;
    }
  }
  addToRent(carDetailDto : CarDetailDto){
    
    
      if(carDetailDto.carId===0){
        this.toastrService.error("Bu araç bulunmuyor");
      }
      else {
        this.toastrService.success("Kiralama Sepetine Eklendi", carDetailDto.carName);
        this.rentService.addToRent(carDetailDto);
      }    
    }  
}
