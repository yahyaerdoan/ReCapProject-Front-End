import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appColor]'
})
export class ColorDirective {

  constructor(private item : ElementRef) { }
    

    @HostListener('mouseenter') onmouseenter() {
      this.item.nativeElement.style.backgroundColor = "yellow";
    }
   
    @HostListener('mouseleave') onmouseleave() {
      this.item.nativeElement.style.backgroundColor = "white";
    }
}