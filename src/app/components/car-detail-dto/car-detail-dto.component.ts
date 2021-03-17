import { Component, OnInit } from '@angular/core';
import { CarDetailDto } from 'src/app/models/car-detail-dto';
import { CarDetailDtoService } from 'src/app/services/car-detail-dto.service';

@Component({
  selector: 'app-car-detail-dto',
  templateUrl: './car-detail-dto.component.html',
  styleUrls: ['./car-detail-dto.component.css']
})
export class CarDetailDtoComponent implements OnInit {

  carDetailDtos : CarDetailDto[] = [];
  dataLoaded = false;
  constructor(private carDetailDtoService : CarDetailDtoService) { }

  ngOnInit(): void {
    this.getCarDetailDtos();
  }
  getCarDetailDtos(){
    this.carDetailDtoService.getCarDetailDtos().subscribe((response) =>{
      this.carDetailDtos = response.data;
      this.dataLoaded = true;      
    });
  }

}
