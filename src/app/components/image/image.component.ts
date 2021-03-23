import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Image } from 'src/app/models/image';
import { ImageService } from 'src/app/services/image.service';

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.css']
})
export class ImageComponent implements OnInit {

  images : Image[] = [];
  carId : number;
  path ="https://localhost:44339/images";
  currentImage : Image | null;
  dataLoaded = false;
  constructor(private imageService : ImageService, private activetedRoute :ActivatedRoute) { }

  ngOnInit(): void {
    this.activetedRoute.params.subscribe(params=>{
      if(params["carId"]){
        this.getImages(params["carId"]);
      }      
    })    
  }
  
  getImages(carId : number){
    this.imageService.getImages(carId).subscribe((response) => {
      this.images= response.data;
      this.dataLoaded = true;
      console.log("get image çalıştı")     
      console.log(response)     
    })  
  }  
  setCurrentImage(image : Image){
    this.currentImage = image;
  }

  getCurrentImageClass(image : Image){

    if(image == this.currentImage){
      return "list-group-item active"
    }
    else{
      return "list-group-item"
    }    
  }
  getAllImageClass(){
    if(!this.currentImage){
      return "list-group-item active"
    }
    else{
      return "list-group-item"
    }
  }
  clearCurrentImage(){
    this.currentImage=null;
  }
}



