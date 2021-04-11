import { Component, Input, OnInit } from '@angular/core';
import { RentalDetailDto } from 'src/app/models/rental-detail-dto';
import { RentalDetailDtoService } from 'src/app/services/rental-detail-dto.service';
import {
  FormGroup,
  FormBuilder,
  FormControl,
  Validators,
} from '@angular/forms';
import { Rental } from 'src/app/models/rental';
import { CustomerDetailDto } from 'src/app/models/customer-detail-dto';
import { CarDetailDto } from 'src/app/models/car-detail-dto';
import { RentalService } from 'src/app/services/rental.service';
import { CustomerService } from 'src/app/services/customer.service';
import { ToastrService } from 'ngx-toastr';
import { CustomerDetailDtoService } from 'src/app/services/customer-detail-dto.service';
import { RentService } from 'src/app/services/rent.service';
import { CarDetailDtoService } from 'src/app/services/car-detail-dto.service';
import { ActivatedRoute, Router } from '@angular/router';
import { LocalStorageService } from 'src/app/services/local-storage.service';
import { Customer } from 'src/app/models/customer';

@Component({
  selector: 'app-rental',
  templateUrl: './rental.component.html',
  styleUrls: ['./rental.component.css'],
})
export class RentalComponent implements OnInit {
  dataLoaded = false;
  selectedCar: CarDetailDto;
  carDetailDto: CarDetailDto;
  customerDetailDtos: CustomerDetailDto[] = [];
  rentalDetailDtos: RentalDetailDto[] = [];
  rentals: Rental[] = [];  
  customerId: number;
  rentdate: Date;
  returndate: Date;  
  carId: number;
  Rentable: boolean;
  totalPrice: number;
  rentalForm: FormGroup;
  findexPoint: number;
  activeCustomer : Customer;

  constructor(
    private rentalService: RentalService,
    private customerDetailDtoService: CustomerDetailDtoService,
    private rentalDetailDtoService: RentalDetailDtoService,
    private toastrService: ToastrService,
    private rentService: RentService,
    private carDetailDtoService: CarDetailDtoService,
    private activatedRoute: ActivatedRoute,
    private formBuilder: FormBuilder,  
    private router: Router,
    private localStorageService : LocalStorageService 
  ) {}

  ngOnInit(): void {
    this.activeCustomer = this.localStorageService.getCurrentCustomer();
    this.activatedRoute.params.subscribe((params) => {
      if (params['carId']) {
        this.getCarsDetailsByCar(params['carId']);
      }
    });
    this.getRentalDetailDtos();
    this.getCustomerDetails();
    this.createRentalForm();
    this.getRentals();
  }
  getCarsDetailsByCar(carId: number) {
    this.carDetailDtoService.getCarsByCar(carId).subscribe((response) => {
      this.selectedCar = response.data[0];
      this.dataLoaded = true;
    });
  }
  getRentals() {
    this.rentalService.getRentals().subscribe((response) => {
      this.rentals = response.data;
    });
  }
  getRentalDetailDtos() {
    this.rentalDetailDtoService.getRentalDetailDtos().subscribe((response) => {
      this.rentalDetailDtos = response.data;
      this.dataLoaded = true;
    });
  }
  getCustomerDetails() {
    this.customerDetailDtoService
      .getCustomerDetailDtos()
      .subscribe((response) => {
        this.customerDetailDtos = response.data;
      });
  }
  createRentalForm() {
    this.rentalForm = this.formBuilder.group({
      carId: [''],
      customerId: [this.activeCustomer.customerId, Validators.required],
      rentDate: ['', Validators.required],      
      returnDate: ['', Validators.required],
    });
  }
  addToRent() {
    if (this.rentalForm.valid) {
      let rentalModel = Object.assign({}, this.rentalForm.value);
      rentalModel.carName = this.selectedCar.carName;
      rentalModel.carId = this.selectedCar.carId;
      rentalModel.brandName = this.selectedCar.brandName;
      rentalModel.brandModel = this.selectedCar.brandModel;
      rentalModel.colorName = this.selectedCar.colorName;
      rentalModel.description = this.selectedCar.description;
      rentalModel.modelYear = this.selectedCar.modelYear;
      rentalModel.dailyPrice = this.selectedCar.dailyPrice;
      rentalModel.totalPrice = this.totalPrice;

      this.rentService.addToRent(rentalModel);
      this.toastrService.success('Kiralama Sepetine Eklendi', this.selectedCar.carName);

    } else {
      this.toastrService.error('Formunuz Eksik', 'Hata');
    }
  }
  calcTotalPrice() {
    let startDate = new Date(this.rentalForm.value.rentDate);
    let endDate = new Date(this.rentalForm.value.returnDate);
    if (isNaN(startDate.getDate()) || isNaN(endDate.getDate())) {
      this.totalPrice = 0;
    } else if (startDate > endDate) {
      this.totalPrice = 0;
    } else {
      this.totalPrice =
        (endDate.getDate() - startDate.getDate()) * this.selectedCar.dailyPrice;
    }
  }
}
