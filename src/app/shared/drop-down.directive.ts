import { Directive, ElementRef, HostBinding, HostListener, inject } from '@angular/core';

@Directive({
  selector: '[appDropdownDirective]',
  standalone: true,
  exportAs: 'appDropdownDirective',
})
export class DropdownDirective {
  private elementRef = inject(ElementRef);

  @HostBinding('class.open') isOpen = false;

  toggle() {
    this.isOpen = !this.isOpen;
    document.body.style.overflow = this.isOpen ? 'hidden' : '';
  }

  @HostListener('document:click', ['$event']) closeOnOutsideClick(event: Event) {
    if (!this.elementRef.nativeElement.contains(event.target)) {
      this.isOpen = false;
      document.body.style.overflow = '';
    }
  }
}
