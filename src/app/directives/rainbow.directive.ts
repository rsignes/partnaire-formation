import { Poney } from './../interfaces/poney';
import { Directive, ElementRef, Input, HostListener } from '@angular/core';

@Directive({
  selector: '[parRainbow]'
})
export class RainbowDirective {

  @Input('parRainbow') isColored: boolean
  @Input() poney: Poney

  constructor(private el: ElementRef) {}

  ngOnInit() {
    if (this.isColored) {
      this.el.nativeElement.style.backgroundColor = "silver"
    }
  }
  
  @HostListener('dblclick') handleDblclick() {
    this.poney.distance += 10

    let runningImg = this.poney.img.replace('rainbow', 'running')
    let rainbowImg = this.poney.img.replace('running', 'rainbow')
    this.poney.img = rainbowImg

    setTimeout(() => {
      this.poney.img = runningImg
    }, 1000)
  }
}
