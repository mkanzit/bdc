import { Directive, OnInit, OnDestroy, AfterViewInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';


@Directive({
  selector: '[scrollView]',
})

export class ScrollViewDirective implements OnInit, OnDestroy, AfterViewInit {

  route: string;

  constructor(
    private router: Router
  ) {

    this.router.events.subscribe(s => {
      if (s instanceof NavigationEnd) {
        const tree = router.parseUrl(router.url);
        if (tree.fragment) {
          const element = document.querySelector('#' + tree.fragment);
          if (element) { element.scrollIntoView(true); }
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
