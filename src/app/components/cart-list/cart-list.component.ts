import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { RentItem } from 'src/app/models/rentItem';
import { RentService } from 'src/app/services/rent.service';

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.css']
})
export class CartListComponent implements OnInit {
  
  dataLoaded = false;
  rentTotal:number
  customerId:number
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
      this.customerId = response.customerId
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
