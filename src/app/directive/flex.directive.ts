import { Directive, Input, HostBinding } from '@angular/core';

@Directive({
  selector: '[cardFlex]'
})
export class FlexDirective {
  @Input() @HostBinding('style.display') flex = 'flex' ;

  constructor() { }

}
