import { Component, OnInit } from '@angular/core';
import { RentalDetailDto } from 'src/app/models/rental-detail-dto';
import { RentalDetailDtoService } from 'src/app/services/rental-detail-dto.service';

@Component({
  selector: 'app-rental',
  templateUrl: './rental.component.html',
  styleUrls: ['./rental.component.css']
})
export class RentalComponent implements OnInit {

  rentalDetailDtos : RentalDetailDto[] = [];
  dataLoaded = false;
  constructor(private rentalDetailDtoService : RentalDetailDtoService) { }

  ngOnInit(): void {
    this.getRentalDetailDtos();
  }
  getRentalDetailDtos(){
    this.rentalDetailDtoService.getRentalDetailDtos().subscribe((response) =>{
      this.rentalDetailDtos = response.data;
      this.dataLoaded = true;      
    });
  }

}
