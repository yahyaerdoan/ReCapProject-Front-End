import { Component, OnInit } from '@angular/core';
import { CustomerDetailDto } from 'src/app/models/customer-detail-dto';
import { CustomerDetailDtoService } from 'src/app/services/customer-detail-dto.service';

@Component({
  selector: 'app-customer-detail-dto',
  templateUrl: './customer-detail-dto.component.html',
  styleUrls: ['./customer-detail-dto.component.css']
})
export class CustomerDetailDtoComponent implements OnInit {

  customerDetailDtos : CustomerDetailDto[] = [];
  dataLoaded = false;
  constructor(private customerDetailDtoService : CustomerDetailDtoService) { }

  ngOnInit(): void {
    this.getCustomerDetailDtos();
  }
  getCustomerDetailDtos(){
    this.customerDetailDtoService.getCustomerDetailDtos().subscribe((response) =>{
      this.customerDetailDtos = response.data;
      this.dataLoaded = true;      
    });
  }

}
