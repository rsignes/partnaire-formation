import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[parRainbow]'
})
export class RainbowDirective {

  @Input('parRainbow') isColored: boolean

  constructor(private el: ElementRef) {}

  ngOnInit() {
    if (this.isColored) {
      this.el.nativeElement.style.backgroundColor = "silver"
    }
  }

}
