import { Directive, ElementRef, OnInit, Renderer2, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighLightCard]'
})
export class HighLightCardDirective implements OnInit {

  constructor(private elRef: ElementRef, private renderer: Renderer2) { }

  ngOnInit() {
    this.renderer.setStyle(this.elRef.nativeElement, "background-color", "blanchedalmond");
  }

  @HostListener("mouseenter") mouseEnterEvent (eventData: Event) {
    this.renderer.setStyle(this.elRef.nativeElement, "background-color", "rgb(191, 255, 0)");
    this.renderer.setStyle(this.elRef.nativeElement, "text-shadow", "3px 3px 2px gray");
    this.renderer.setStyle(this.elRef.nativeElement, "font-size", "1.2rem");
    
  }

  @HostListener("mouseleave") mouseLeaveEvent (eventData: Event) {
    this.renderer.setStyle(this.elRef.nativeElement, "background-color", "blanchedalmond");
    this.renderer.setStyle(this.elRef.nativeElement, "text-shadow", "none");
    this.renderer.setStyle(this.elRef.nativeElement, "font-size", "1rem");
  }
}
