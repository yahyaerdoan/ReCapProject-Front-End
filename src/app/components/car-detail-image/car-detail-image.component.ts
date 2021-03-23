import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CarDetailDto } from 'src/app/models/car-detail-dto';
import { Image } from 'src/app/models/image';
import { CarDetailDtoService } from 'src/app/services/car-detail-dto.service';
import { CarDetailImageService } from 'src/app/services/car-detail-image.service';
import { ImageService } from 'src/app/services/image.service';

@Component({
  selector: 'app-car-detail-image',
  templateUrl: './car-detail-image.component.html',
  styleUrls: ['./car-detail-image.component.css']
})
export class CarDetailImageComponent implements OnInit {
  carDetailDtos : CarDetailDto[] = [];
  carDetailDto : CarDetailDto;
  images : Image[] = [];
  carId : number;
  path ="https://localhost:44339/images";
  currentImage : Image | null;

  dataLoaded = false;
  constructor(private carDetailDtoService : CarDetailDtoService,
    private imageService : ImageService, 
    private activatedRoute : ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      if(params["carId"]){this.getCarsDetailsByCar(params["carId"]); this.getImagesByCar(params["carId"]);}      
               
    });
    this.getCarDetailDtos();   
  }
  getCarDetailDtos(){
    this.carDetailDtoService.getCarDetailDtos().subscribe((response) =>{
      this.carDetailDtos = response.data;      
      console.log(this.carDetailDto, response.data)
      this.dataLoaded = true;      
    });
  }

  
  getCarsDetailsByCar(carId : number){
    this.carDetailDtoService.getCarsByCar(carId).subscribe((response) => {
      this.carDetailDto = response.data[0];
      this.dataLoaded = true;      
     })
  }  
  
  getImagesByCar(carId : number){
  this.imageService.getImages(carId).subscribe((response) => {
  this.images= response.data;
  this.dataLoaded = true;
  this.currentImage=this.images[0]
  console.log(response);      
  })  
  }  
  getCurrentImageClass(image : Image){

    if(this.currentImage == image ){
      return "carousel-item active"
    }
    else{
      return "carousel-item "
    }    
  }
}

  
