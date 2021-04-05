import { Component, Input, OnInit } from '@angular/core';
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
  rentTotal:number  
  rentItems : RentItem[] =[]

  constructor(private rentService : RentService,
     private toastrService :ToastrService ) {}

  ngOnInit(): void {
    this.getRent();
    
  }
  getRent(){
    this.rentItems = this.rentService.list()
    this.rentService.data.subscribe(response => {
      this.rentTotal = response.rentTotal
    })
    this.dataLoaded = true;
  } 

  removeFromRent(rentItem : RentItem){
    this.rentService.removeFromRent(rentItem);
    this.toastrService.error("Sepetten Silindi!", rentItem.carName)
  }  
}

/*

component -> component     
   •  query param (carId)
   •  Input / Output   ( header / child )

*/
