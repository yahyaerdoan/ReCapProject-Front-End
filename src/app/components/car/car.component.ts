import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Car } from 'src/app/models/car';
import { CarService } from 'src/app/services/car.service';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css'],
})
export class CarComponent implements OnInit {


  cars : Car[] = [];
  currentCar : Car | null;
  dataLoaded = false;
  filterText ="";

  constructor(private carService : CarService,
    private activatedRoute : ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      // if(params["categoryId"]){this.getCarsByCategory(params["categoryId"])}
      // else if(params["carId"]){this.getCarsByCar(params["carId"]);}      
      // else if(params["brandId"]){this.getCarsByBrand(params["brandId"])}
      // else if(params["colorId"]){this.getCarsByColor(params["colorId"])}     
      this.getCars();
    });
      
  }
  getCars(){
    this.carService.getCars().subscribe((response) => {
      this.cars = response.data;
      this.dataLoaded =true;
    });
  }
  setCurrentCar(car : Car){
    this.currentCar = car;
  }

  getCurrentCarClass(car : Car){

    if(car == this.currentCar){
      return "list-group-item active"
    }
    else{
      return "list-group-item"
    }    
  }
  getAllCarClass(){
    if(!this.currentCar){
      return "list-group-item active"
    }
    else{
      return "list-group-item"
    }
  }
  clearCurrentCar(){
    this.currentCar=null;
  }  
















  

  // getCarsByCategory(categoryId : number){
  //   this.carService.getCarsByCategory(categoryId).subscribe((response) => {
  //     this.cars = response.data;
  //     this.dataLoaded = true;
  //   })
  // }
  // getCarsByCar(carId : number){
  //   this.carService.getCarsByCar(carId).subscribe((response) => {
  //     this.cars = response.data;
  //     this.dataLoaded = true;      
  //    })
  // }
  // getCarsByBrand(brandId : number){
  //   this.carService.getCarsByBrand(brandId).subscribe((response) => {
  //     this.cars = response.data;
  //     this.dataLoaded = true;
  //    })
  // }
  // getCarsByColor(colorId : number){
  //   this.carService.getCarsByColor(colorId).subscribe((response) => {
  //     this.cars = response.data;
  //     this.dataLoaded = true;
      
  //   })
  // }
 
}
