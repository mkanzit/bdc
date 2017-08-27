import { Directive, ElementRef, OnInit, OnDestroy, AfterViewInit, Input } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import 'rxjs/add/operator/filter';

import { LayoutEventsService } from '../_events/layout-events.service';
import { PageEventsService } from '../_events/page-events.service';

@Directive({
    selector: '[scroll]',
})

export class ScrollDirective implements OnInit, OnDestroy, AfterViewInit {

  @Input() nsOptions: Object;

  constructor(
    private el: ElementRef,
    private router: Router,
    private layoutEvents: LayoutEventsService,
    private pageEvents: PageEventsService
  ) {

  }

  ngOnInit() {
    // Refresh on route change
    this.router.events
    .filter(event => event instanceof NavigationEnd)
    .subscribe((event: NavigationEnd) => {
      $(this.el.nativeElement).getNiceScroll().resize();
    });

    // Refrech on layout change
    this.layoutEvents.getExpended().subscribe(() => {
      $(this.el.nativeElement).getNiceScroll().resize();
    });

    // Refrech on language change
    this.layoutEvents.getRtl().subscribe(() => {
      $(this.el.nativeElement).getNiceScroll().resize();
    });
  }

  ngAfterViewInit() {
    $(this.el.nativeElement).niceScroll(this.nsOptions);
  }

  ngOnDestroy() {
    $(this.el.nativeElement).getNiceScroll().hide().remove();
  }
}
