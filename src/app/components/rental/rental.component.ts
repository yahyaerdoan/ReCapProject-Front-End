import { Component, Input, OnInit } from '@angular/core';
import { RentalDetailDto } from 'src/app/models/rental-detail-dto';
import { RentalDetailDtoService } from 'src/app/services/rental-detail-dto.service';
import {FormGroup,FormBuilder,FormControl,Validators} from "@angular/forms"
import { Rental } from 'src/app/models/rental';
import { CustomerDetailDto } from 'src/app/models/customer-detail-dto';
import { CarDetailDto } from 'src/app/models/car-detail-dto';
import { RentalService } from 'src/app/services/rental.service';
import { CustomerService } from 'src/app/services/customer.service';
import { ToastrService } from 'ngx-toastr';
import { CustomerDetailDtoService } from 'src/app/services/customer-detail-dto.service';
import { RentService } from 'src/app/services/rent.service';
import { CarDetailDtoService } from 'src/app/services/car-detail-dto.service';

@Component({
  selector: 'app-rental',
  templateUrl: './rental.component.html',
  styleUrls: ['./rental.component.css']
})
export class RentalComponent implements OnInit {
  
  dataLoaded = false;
  
  carDetailDtos: CarDetailDto[] = [];
  carDetailDto: CarDetailDto;

  rentalDetailDtos : RentalDetailDto[] = [];
  rentals: Rental[] = [];  
  customerDetailDtos:CustomerDetailDto[]=[];
  customerId:number;
  rentdate:Date;
  returndate:Date;
  rental: Rental;
  isRented:boolean = false;

  @Input() carforrental:CarDetailDto;
  constructor(private rentalService:RentalService,
    private customerDetailDtoService : CustomerDetailDtoService,
    private rentalDetailDtoService : RentalDetailDtoService,
    private toastrService : ToastrService,
    private rentService : RentService,
    private carDetailDtoService: CarDetailDtoService,) { }


  ngOnInit(): void {
    this.getCarDetailDtos();
    this.getRentalDetailDtos(); 
    this.getCustomerDetails();   
  }
  getCarDetailDtos() {
    this.carDetailDtoService.getCarDetailDtos().subscribe((response) => {
      this.carDetailDtos = response.data;
      this.carDetailDto = response.data[0];
      this.dataLoaded = true;
    });
  }
  
  getRentals() {
    this.rentalService.getRentals().subscribe(response => {
      this.rentals = response.data;
    })
  }

  getRentalDetailDtos(){
    this.rentalDetailDtoService.getRentalDetailDtos().subscribe((response) =>{
      this.rentalDetailDtos = response.data;
      this.dataLoaded = true;      
    });
  }

  getCustomerDetails(){
    this.customerDetailDtoService.getCustomerDetailDtos().subscribe((response) =>{
      this.customerDetailDtos = response.data;
    });
  }

  addToRenth(){
    let rent : Rental={
      carId : this.carforrental.carId,
      customerId : this.customerId,
      rentDate : this.rentdate,
      returnDate : this.rentdate,
      dailyPrice: this.carforrental.dailyPrice
    };
    this.rental = rent;
    this.isRented = true;
    console.log(rent)
    this.toastrService.success("kiralama başarılı ")
  }

  addToRent(carDetailDto: CarDetailDto) {
    if (carDetailDto.carId === 0) {
      this.toastrService.error('Bu araç bulunmuyor');
    } else {
      this.toastrService.success(
        'Kiralama Sepetine Eklendi',
        carDetailDto.carName
      );
      this.rentService.addToRent(carDetailDto);
    }
  }
  
}
