import { Directive, ElementRef, OnInit, AfterViewInit, OnDestroy, Output, EventEmitter } from '@angular/core';


@Directive({
    selector: '[selectBox]'
})
export class SelectBoxDirective implements OnInit, OnDestroy, AfterViewInit {

  // @HostBinding('selectValue') value;
  @Output() select: EventEmitter<any> = new EventEmitter();
  value: string;

  constructor(private el: ElementRef) {
  }

  ngOnInit() {
  }

  ngAfterViewInit() {
    $(this.el.nativeElement).selectBox({
      mobile: true
    }).change(() => {
      this.value = String( $(this.el.nativeElement).val() );
      this.select.emit(this.value);
    });
  }

  ngOnDestroy() {
  }
}
