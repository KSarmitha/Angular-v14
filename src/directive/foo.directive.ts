import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appFoo]',
  standalone: true,
})
export class FooDirective {
  constructor(private elRef: ElementRef) {
    elRef.nativeElement.style.backgroundColor = 'red';
    elRef.nativeElement.style.color = 'white';
  }
}
