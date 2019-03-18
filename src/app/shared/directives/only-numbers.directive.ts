import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[onlyNumbers]'
})
export class OnlyNumbersDirective {
  private readonly regex: RegExp = new RegExp(/^-?[0-9 ]+(\.[0-9 ]*){0,1}$/g);
  private readonly specialKeys: string[] = [
    'Backspace',
    'Tab',
    'End',
    'Home',
    '-'
  ];

  constructor(private readonly el: ElementRef) {}

  @HostListener('keydown', ['$event'])
  public onKeydown(event: KeyboardEvent): any {
    // Allow Backspace, tab, end, and home keys
    if (this.specialKeys.indexOf(event.key) !== -1) {
      return;
    }

    const current: string = this.el.nativeElement.value;
    const next: string = current.concat(event.key);

    if (next && !String(next).match(this.regex)) {
      event.preventDefault();
    }
  }
}
