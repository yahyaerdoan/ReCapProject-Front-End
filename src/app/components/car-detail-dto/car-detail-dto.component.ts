import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CarDetailDto } from 'src/app/models/car-detail-dto';
import { CarDetailDtoService } from 'src/app/services/car-detail-dto.service';
import { ToastrService } from 'ngx-toastr';
import { RentService } from 'src/app/services/rent.service';


@Component({
  selector: 'app-car-detail-dto',
  templateUrl: './car-detail-dto.component.html',
  styleUrls: ['./car-detail-dto.component.css']
})
export class CarDetailDtoComponent implements OnInit {

  carDetailDtos : CarDetailDto[] = [];
  carDetailDto : CarDetailDto;
  filterText ="";
  dataLoaded = false;

  constructor(private carDetailDtoService : CarDetailDtoService,     
    private activatedRoute : ActivatedRoute, 
    private toastrService : ToastrService,
    private rentService : RentService ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      if(params["categoryId"]){this.getCarsDetailsByCategory(params["categoryId"])}
      else if(params["carId"]){this.getCarsDetailsByCar(params["carId"]);}      
      else if(params["brandId"]){this.getCarsDetailsByBrand(params["brandId"])}
      else if(params["colorId"]){this.getCarsDetailsByColor(params["colorId"])}     
      
    });
    this.getCarDetailDtos();   
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
