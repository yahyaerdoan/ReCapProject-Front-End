import { Pipe, PipeTransform } from '@angular/core';
import { Color } from '../models/color';

@Pipe({
  name: 'filterColor'
})
export class FilterColorPipe implements PipeTransform {

  // transform(value: Color[], filterText: string): Color[] {
  //   filterText = filterText?filterText.toLocaleLowerCase():""
  //   return filterText?value.filter((c:Color)=>c.colorName.toLocaleLowerCase().indexOf(filterText)!==-1): value;
  // }
  transform(value: Color[], filterText: string): Color[] {
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
