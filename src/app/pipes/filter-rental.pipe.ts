import { Pipe, PipeTransform } from '@angular/core';
import { RentalDetailDto } from '../models/rental-detail-dto';

@Pipe({
  name: 'filterRental'
})
export class FilterRentalPipe implements PipeTransform {

  transform(value: RentalDetailDto[], filterText: boolean): RentalDetailDto[] {  
    
    if(filterText){
      return value.filter((b:RentalDetailDto) => b.returnDate !== null ) 
    } else {
      return value.filter((b:RentalDetailDto) => b.returnDate === null ) 
    }
  }
}
