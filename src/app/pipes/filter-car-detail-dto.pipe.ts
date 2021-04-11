import { Pipe, PipeTransform } from '@angular/core';
import { CarDetailDto } from '../models/car-detail-dto';

@Pipe({
  name: 'filterCarDetailDto'
})
export class FilterCarDetailDtoPipe implements PipeTransform {

  // transform(value: CarDetailDto[], filterText: string): CarDetailDto[] {
  //   filterText = filterText?filterText.toLocaleLowerCase():""
  //   return filterText?value.filter((c:CarDetailDto)=>c.carName.toLocaleLowerCase().indexOf(filterText)!==-1): value;
  // }

  transform(value: CarDetailDto[], filterText: string): CarDetailDto[] {
    return filterText?value
    .filter((c:any) => this.matchValue(c,filterText))
    :value;
  }
  matchValue(c:any, filterText:string) {
    return Object.keys(c).map((key) => {
       return new RegExp(filterText, 'gi').test(c[key]);
    }).some(result => result);
  }
}
