import { Pipe, PipeTransform } from '@angular/core';
import { Brand } from '../models/brand';

@Pipe({
  name: 'filterBrand'
})
export class FilterBrandPipe implements PipeTransform {

  // transform(value: Brand[], filterText: string): Brand[] {
  //   filterText = filterText?filterText.toLocaleLowerCase():""
  //   return filterText?value.filter((b:Brand)=>b.brandName.toLocaleLowerCase().indexOf(filterText)!==-1): value;
  // }

  transform(value: Brand[], filterText: string): Brand[] {
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
