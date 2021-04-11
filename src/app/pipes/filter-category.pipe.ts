import { Pipe, PipeTransform } from '@angular/core';
import { Category } from '../models/category';

@Pipe({
  name: 'filterCategory'
})
export class FilterCategoryPipe implements PipeTransform {

  // transform(value: Category[], filterText: string): Category[] {
  //   filterText = filterText?filterText.toLocaleLowerCase():""
  //   return filterText?value.filter((c:Category)=>c.categoryName.toLocaleLowerCase().indexOf(filterText)!==-1): value;
  // }
  transform(value: Category[], filterText: string): Category[] {
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
