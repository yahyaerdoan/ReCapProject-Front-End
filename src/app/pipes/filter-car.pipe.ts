import { Pipe, PipeTransform } from '@angular/core';
import { Car } from '../models/car';

@Pipe({
  name: 'filterCar'
})
export class FilterCarPipe implements PipeTransform {

  // transform(value: Car[], filterText: string): Car[] {
  //   filterText = filterText?filterText.toLocaleLowerCase():""
  //   return filterText?value.filter((c:Car)=>c.carName.toLocaleLowerCase().indexOf(filterText)!==-1): value;
  // }

  transform(value: Car[], filterText: string): Car[] {
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
