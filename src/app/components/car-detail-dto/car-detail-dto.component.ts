import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CarDetailDto } from 'src/app/models/car-detail-dto';
import { Image } from 'src/app/models/image';
import { CarDetailDtoService } from 'src/app/services/car-detail-dto.service';
import { ImageService } from 'src/app/services/image.service';


@Component({
  selector: 'app-car-detail-dto',
  templateUrl: './car-detail-dto.component.html',
  styleUrls: ['./car-detail-dto.component.css']
})
export class CarDetailDtoComponent implements OnInit {

  carDetailDtos : CarDetailDto[] = [];
  carDetailDto : CarDetailDto;
  // images : Image[] = [];
  //carId : number;
  //path ="https://localhost:44339/images";
  //currentImage : Image | null;

  dataLoaded = false;
  constructor(private carDetailDtoService : CarDetailDtoService,
    private imageService : ImageService, 
    private activatedRoute : ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      if(params["categoryId"]){this.getCarsDetailsByCategory(params["categoryId"])}
      else if(params["carId"]){this.getCarsDetailsByCar(params["carId"]); 
      // this.getImagesByCar(params["carId"]);
    }      
      else if(params["brandId"]){this.getCarsDetailsByBrand(params["brandId"])}
      else if(params["colorId"]){this.getCarsDetailsByColor(params["colorId"])}     
      
    });
    this.getCarDetailDtos();   
  }
  getCarDetailDtos(){
    this.carDetailDtoService.getCarDetailDtos().subscribe((response) =>{
      this.carDetailDtos = response.data;
      this.carDetailDto= response.data[0];
      console.log(this.carDetailDto, response.data)
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
  // getImagesByCar(carId : number){
  // this.imageService.getImages(carId).subscribe((response) => {
  // this.images= response.data;
  // this.dataLoaded = true;
  // this.currentImage=this.images[0]
  // console.log(response);      
  // })  
  // }  
  // getCurrentImageClass(image : Image){

  //   if(this.currentImage == image ){
  //     return "carousel-item active"
  //   }
  //   else{
  //     return "carousel-item "
  //   }    
  // }
}
