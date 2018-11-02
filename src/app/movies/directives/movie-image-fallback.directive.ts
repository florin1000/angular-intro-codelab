import { Directive, Input, HostListener, ElementRef } from '@angular/core';

@Directive({
  selector: '[ngiMovieImageFallback]'
})
export class MovieImageFallbackDirective {
  @Input() ngiMovieImageFallback = 'assets/noImage1.jpg';

  @HostListener('error')
  setImage() {
    this.el.nativeElement.src = this.ngiMovieImageFallback;
  }
  constructor(private el: ElementRef) {}
}
