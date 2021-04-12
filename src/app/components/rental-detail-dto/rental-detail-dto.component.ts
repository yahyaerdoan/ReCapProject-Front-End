import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { RentalDetailDto } from 'src/app/models/rental-detail-dto';
import { RentalDetailDtoService } from 'src/app/services/rental-detail-dto.service';
import { RentalService } from 'src/app/services/rental.service';

@Component({
  selector: 'app-rental-detail-dto',
  templateUrl: './rental-detail-dto.component.html',
  styleUrls: ['./rental-detail-dto.component.css']
})
export class RentalDetailDtoComponent implements OnInit {

  rentalDetailDtos : RentalDetailDto[] = [];
  dataLoaded = false;

  constructor(private rentalDetailDtoService : RentalDetailDtoService,     
     private toastrService : ToastrService) { }

  ngOnInit(): void {
    this.getRentalDetailDtos();
  }
  getRentalDetailDtos(){
    this.rentalDetailDtoService.getRentalDetailDtos().subscribe((response) =>{
      this.rentalDetailDtos = response.data;
      this.dataLoaded = true;      
    });
  }
  carIsReturned(carId:number){
    this.rentalDetailDtoService.carIsReturned(carId).subscribe(response => {
      this.toastrService.success(response.message)
      this.getRentalDetailDtos(); // Burada metodu yeniden çağıyoruz ve işlemi güncelliyor
    }, responseError=>{
      this.toastrService.success(responseError.message)
    });
  }
}
