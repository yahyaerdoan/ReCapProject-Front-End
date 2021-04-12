import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Image } from 'src/app/models/image';
import { ImageService } from 'src/app/services/image.service';

@Component({
  selector: 'app-image-add',
  templateUrl: './image-add.component.html',
  styleUrls: ['./image-add.component.css']
})
export class ImageAddComponent implements OnInit {

  
  path ="https://localhost:44339/images/";
  images : Image[] = [];  
  carId: number
  imageFile : any

  constructor(
    private activatedRoute: ActivatedRoute, 
    private imageService:ImageService,
    private formBuilder:FormBuilder,
    private http: HttpClient,
    private router:Router,
    private toastrService: ToastrService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params=>{
      if(params["carId"]){
        this.carId = params["carId"]
        this.getCarDetailsByCar(params["carId"])
      }
    });
  }
  getCarDetailsByCar(carId:number) {
    this.imageService.getImages(carId).subscribe((response) => {
      this.images = response.data;
    });
  }
  delete(imagery:Image){

    const image: FormData = new FormData();
    image.append('ImageId', imagery.imageId.toString());
    this.imageService.delete(image).subscribe(response=>{
      this.getCarDetailsByCar(this.carId)
      this.toastrService.success(response.message,"Başarılı")
    }, responseError => {
      this.toastrService.error(responseError,"Hata")
    })
  }
  add(){
    const image: FormData = new FormData();
    image.append('CarId', this.carId.toString());
    image.append("file", this.imageFile, this.imageFile.name);

    console.log(image)
    this.imageService.add( image ).subscribe(response=>{
      this.toastrService.success(response.message)
      this.getCarDetailsByCar(this.carId)
    },responseError=>{
      this.toastrService.error(responseError.error.message)
    })
  }
  fileSelected(event:any) {
    this.imageFile = event.target.files[0]
    event.target.nextElementSibling.innerText=this.imageFile.name
  }
}


