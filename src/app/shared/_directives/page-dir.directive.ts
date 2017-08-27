import { Directive, ElementRef, OnInit, OnDestroy, AfterViewInit, Renderer2 } from '@angular/core';
import { Location } from '@angular/common';
import { Router, NavigationEnd } from '@angular/router';

import { LayoutEventsService } from '../../shared/_events/layout-events.service';


@Directive({
    selector: '[pageDir]',
})

export class PageDirDirective implements OnInit, OnDestroy, AfterViewInit {

  route: string;

  constructor(
    private el: ElementRef,
    private renderer: Renderer2,
    private location: Location,
    private router: Router,
    private layoutEvents: LayoutEventsService
  ) {

    this.router.events.subscribe((event: NavigationEnd) => {
      if (event instanceof NavigationEnd) {
        const rtl = this.layoutEvents.hasRtl();

        if ( rtl === true ) {

          setTimeout(() => {
            this.layoutEvents.setRtl(true);
          }, 1);
        } else {
          setTimeout(() => {
            this.layoutEvents.setRtl(false);
          }, 1);

        }
      }
    });
  }

  ngOnInit() {
  }

  ngAfterViewInit() {
  }

  ngOnDestroy() {
  }
}
