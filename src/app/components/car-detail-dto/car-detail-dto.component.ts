import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CarDetailDto } from 'src/app/models/car-detail-dto';
import { CarDetailDtoService } from 'src/app/services/car-detail-dto.service';
import { ToastrService } from 'ngx-toastr';
import { Brand } from 'src/app/models/brand';
import { Color } from 'src/app/models/color';
import { Car } from 'src/app/models/car';
import { Category } from 'src/app/models/category';
import { BrandService } from 'src/app/services/brand.service';
import { ColorService } from 'src/app/services/color.service';
import { CategoryService } from 'src/app/services/category.service';
import { CarService } from 'src/app/services/car.service';
import { LocalStorageService } from 'src/app/services/local-storage.service';
import { RentalService } from 'src/app/services/rental.service';


@Component({
  selector: 'app-car-detail-dto',
  templateUrl: './car-detail-dto.component.html',
  styleUrls: ['./car-detail-dto.component.css'],
})
export class CarDetailDtoComponent implements OnInit {
  carDetailDtos: CarDetailDto[] = [];
  carDetailDto: CarDetailDto;

  categories: Category[] = [];
  cars: Car[] = [];
  brands: Brand[] = [];
  colors: Color[] = [];

  brandId: number;
  colorId: number;
  categoryId: number;
  carId: number;

  filterText = '';
  dataLoaded = false;
  

  constructor(
    private carDetailDtoService: CarDetailDtoService,
    private activatedRoute: ActivatedRoute,
    private toastrService: ToastrService,   
    private brandService: BrandService,
    private colorService: ColorService,
    private categoryService: CategoryService,
    private carService: CarService,
    private localStorageSercive : LocalStorageService,
    private router : Router,
    private rentalService : RentalService
     
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      if ((
        params['brandId'] &&
        params['categoryId']&&
        params['carId']&&
        params['colorId'] )
        
      ) {        
        this.getFilterCars(
          params['brandId'],
          params['categoryId'],
          params['carId'],
          params['colorId']          
        );
      } else if (params['categoryId']) {
        this.getCarsDetailsByCategory(params['categoryId']);
      } else if (params['carId']) {
        this.getCarsDetailsByCar(params['carId']);         
      } else if (params['brandId']) {
        this.getCarsDetailsByBrand(params['brandId']);
      } else if (params['colorId']) {
        this.getCarsDetailsByColor(params['colorId']);       
      } 
      else {
        this.getCarDetailDtos();
      }
    });
    this.getColors();
    this.getBrands();
    this.getCars();
    this.getCategories();
  }
  getCarDetailDtos() {
    this.carDetailDtoService.getCarDetailDtos().subscribe((response) => {
      this.carDetailDtos = response.data;
      this.carDetailDto = response.data[0];
      this.dataLoaded = true;
    });
  }
  getCarsDetailsByCategory(categoryId: number) {
    this.carDetailDtoService
      .getCarsByCategory(categoryId)
      .subscribe((response) => {
        this.carDetailDtos = response.data;
        this.dataLoaded = true;
      });
  }
  getCarsDetailsByCar(carId: number) {
    this.carDetailDtoService.getCarsByCar(carId).subscribe((response) => {
      this.carDetailDtos = response.data;
      this.dataLoaded = true;
    });
  }
  getCarsDetailsByBrand(brandId: number) {
    this.carDetailDtoService.getCarsByBrand(brandId).subscribe((response) => {
      this.carDetailDtos = response.data;
      this.dataLoaded = true;
    });
  }
  getCarsDetailsByColor(colorId: number) {
    this.carDetailDtoService.getCarsByColor(colorId).subscribe((response) => {
      this.carDetailDtos = response.data;      
      this.dataLoaded = true;     
    });
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
  getFilterCars(
    categoryId: number,
    carId: number,
    brandId: number,
    colorId: number
  ) {
    this.carDetailDtoService
      .getFilterCars(categoryId, carId, brandId, colorId)      
      .subscribe((response) => {
        console.log(response)
        this.carDetailDtos = response.data;
        this.dataLoaded = true;
        if (this.carDetailDtos.length == 0) {
          this.toastrService.error('Herhangi bir eşleşme bulunamadı!');
        } else {
          this.toastrService.success('Filitreleme Listelendi');
        }
        
      });
  }
  getSelectedCategoryId(categoryId: number) {
    if (this.categoryId == categoryId) {
      return true;
    } else {
      return false;
    }
  }
  getSelectedCarId(carId: number) {
    if (this.carId == carId) {
      return true;
    } else {
      return false;
    }
  }
  getSelectedColorId(colorId: number) {
    if (this.colorId == colorId) {
      return true;
    } else {
      return false;
    }
  }
  getSelectedBrandId(brandId: number) {
    if (this.brandId == brandId) {
      return true;
    } else {
      return false;
    }
  } 
  carControl(carDetailDto : CarDetailDto){
    
    let customer = this.localStorageSercive.getCurrentCustomer(); 
    this.rentalService.FindexScoreCheck(customer.customerId, carDetailDto.carId).subscribe(response=>{      

      this.rentalService.IsRentable(carDetailDto.carId).subscribe(response=>{
        console.log(response)
        this.router.navigate(["/cars/rentals/" + carDetailDto.carId]);      
        },
        responseError => {
        this.toastrService.error(responseError.error.message)
      })
    },responseError => {
      this.toastrService.info(responseError.error.message)
    });
  }
  
  //  findexPointControl(carDetailDto : CarDetailDto){
  //    let customerFindexPoint = this.localStorageSercive.getCurrentCustomer().findexPoint;     
  //    if(carDetailDto.findexPoint < customerFindexPoint){       
  //      this.router.navigate(["/cars/rentals/" + carDetailDto.carId])
  //    }else{
  //      this.toastrService.info("Findex Puanınız Yetersizdir!")
  //    }
  //  }
}
