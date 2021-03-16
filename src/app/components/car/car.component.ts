import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Brand } from 'src/app/models/brand';
import { Car } from 'src/app/models/car';
import { Color } from 'src/app/models/color';
import { CarService } from 'src/app/services/car.service';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css'],
})
export class CarComponent implements OnInit {
  
  cars: Car[] = [];

  dataLoaded = false;

  constructor(private carService: CarService, private activatedRoute : ActivatedRoute) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      if(params["categoryId"]){this.getCarsByCategory(params["categoryId"])}
      else if(params["brandId"]){this.getCarsByBrand(params["brandId"])}
      else if(params["colorId"]){this.getCarsByColor(params["colorId"])}
      else{
        this.getCars();
      }
    });   
  }
  getCars(){
    this.carService.getCars().subscribe((response) => {
      this.cars = response.data;
      this.dataLoaded = true;
    })
  }
  getCarsByCategory(categoryId : number){
    this.carService.getCarsByCategory(categoryId).subscribe((response) => {
      this.cars = response.data;
      this.dataLoaded = true;
    })
  }
  getCarsByBrand(brandId : number){
    this.carService.getCarsByBrand(brandId).subscribe((response) => {
      this.cars = response.data;
      this.dataLoaded = true;
     })
  }
  getCarsByColor(colorId : number){
    this.carService.getCarsByColor(colorId).subscribe((response) => {
      this.cars = response.data;
      this.dataLoaded = true;
    })
  }
}
