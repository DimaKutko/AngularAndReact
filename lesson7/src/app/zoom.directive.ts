import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appZoom]'
})
export class ZoomDirective {

  constructor(private el: ElementRef) { 
    el.nativeElement.style.fontSize = '20px';
  }

  @Input('appZoom') size:any

  @HostListener('mouseenter') onMouseEnter(){
    this.setFontSize(this.size);
  }

  @HostListener('mouseleave') onMouseLeave(){
    this.setFontSize(15);
  }

  setFontSize(size: string | number) : void {
    this.el.nativeElement.style.fontSize = `${this.size}px`;
  }
}
