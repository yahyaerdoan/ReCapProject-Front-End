import { Component, OnInit } from '@angular/core';
import { CarDetailDto } from 'src/app/models/car-detail-dto';
import { Image } from 'src/app/models/image';
import { CarDetailDtoService } from 'src/app/services/car-detail-dto.service';
import { ImageService } from 'src/app/services/image.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  carDetailDtos : CarDetailDto[] = [];  // araç bilgileri
  images : Image[] = []; // resim bilgileri

   
  

  constructor(private carDetailDtoService : CarDetailDtoService, 
    private imageService: ImageService) { }

  ngOnInit(): void {
    this.getCarDetailDtos()
    this.getAllImages()
  }

  getCarDetailDtos(){
    this.carDetailDtoService.getCarDetailDtos().subscribe((response) =>{
      this.carDetailDtos = response.data;  
      //this.dataLoaded = true;      
    });
  }  

  getAllImages(){
    this.imageService.getAllImages().subscribe(response=>{
      this.images = response.data
    })
  }  

  getImageByCar(carId:number){
    let apiUrl = this.imageService.apiUrl
    let carDetailDto = this.images.find(x => x.carId == carId)
    console.log(this.images)
    return apiUrl + (carDetailDto == undefined ? "default.jpg" : carDetailDto.imagePath)
   
  }

}
