import { Directive, ElementRef, OnInit, OnDestroy, AfterViewInit, Renderer } from '@angular/core';
import { Location } from '@angular/common';
import { Router, NavigationEnd } from '@angular/router';


@Directive({
    selector: '[pageClass]',
})

export class PageClassDirective implements OnInit, OnDestroy, AfterViewInit {

  route: string;

  constructor(
    private el: ElementRef,
    private renderer: Renderer,
    private location: Location,
    private router: Router
  ) {

    this.router.events.subscribe((event: NavigationEnd) => {
      if (event instanceof NavigationEnd) {
        this.renderer.setElementClass(el.nativeElement, this.route, false);

        if (this.location.path() !== '') {
          this.route = this._pageClass(this.location.path());
        } else {
          this.route = 'home';
        }

        this.renderer.setElementClass(el.nativeElement, this.route, true);
      }
    });

  }

  ngOnInit() {
  }

  ngAfterViewInit() {
  }

  ngOnDestroy() {
  }

  private _pageClass(route: string) {
    return route.split('/').slice(1).join('-');
  }
}
