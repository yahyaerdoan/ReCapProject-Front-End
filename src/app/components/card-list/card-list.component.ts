import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { CarDetailDto } from 'src/app/models/car-detail-dto';
import { RentItem } from 'src/app/models/rentItem';
import { RentService } from 'src/app/services/rent.service';

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.css']
})
export class CardListComponent implements OnInit {
  
  dataLoaded = false;
  

  rentItems : RentItem[] =[]
  
  constructor(private rentService : RentService,
     private toastrService :ToastrService ) {}

  ngOnInit(): void {
    this.getRent();
    
  }
  getRent(){
    this.rentItems = this.rentService.list()
    this.dataLoaded = true;
  } 

  removeFromRent(carDetailDto : CarDetailDto){
    this.rentService.removeFromRent(carDetailDto);
    this.toastrService.error("Sepetten Silindi!", carDetailDto.carName)
  }  
}
