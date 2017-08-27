import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({ selector: '[asideMenu]' })
export class MenuAsideDirective implements OnInit {

  element;
  anchor;

  constructor(el: ElementRef) {
    this.element = el.nativeElement;
  }

  ngOnInit() {
    this.anchor  = $(this.element.querySelector('.anchor'));

    this.anchor.click(function () {
      $(this).toggleClass('active');
      $(this).next('.widgets').slideToggle().find('.widget').removeClass('active');
    });
  }
}
