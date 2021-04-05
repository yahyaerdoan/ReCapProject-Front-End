import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { CarDetailDto } from 'src/app/models/car-detail-dto';
import { Rental } from 'src/app/models/rental';
import { RentItem } from 'src/app/models/rentItem';
import { RentService } from 'src/app/services/rent.service';

@Component({
  selector: 'app-rent-summary',
  templateUrl: './rent-summary.component.html',
  styleUrls: ['./rent-summary.component.css']
})
export class RentSummaryComponent implements OnInit {

  rentItems : RentItem[] = [];

  constructor(private rentService : RentService,
    private toastrService : ToastrService) { }

  ngOnInit(): void {
    this.getRent();
  }
  getRent(){
    this.rentItems = this.rentService.list();
  }
  removeFromRent(rentItem : RentItem){
    this.rentService.removeFromRent(rentItem);
    this.toastrService.error("Sepetten Silindi!", rentItem.carName)
  }  
}
