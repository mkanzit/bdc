import { Component, Input, OnInit, HostBinding } from '@angular/core';
import { AnchorList } from '../../../../../shared/_models/anchors.model';
import { LayoutEventsService } from '../../../../../shared/_events/layout-events.service';

import { Router, NavigationEnd } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-anchors',
  templateUrl: './anchors.component.html',
  styleUrls: ['./anchors.component.scss']
})
export class AnchorsComponent implements OnInit {

  @HostBinding('class.rtl') rtl: boolean;
  @Input() anchors: AnchorList;
  csOptions: Object;
  currentRoute;

  constructor(
    private router: Router,
    private location: Location,
    private layoutEvents: LayoutEventsService
  ) {
    this.rtl = false;
    this.csOptions  = {
      axis: 'y',
      autoHideScrollbar: true,
      alwaysShowScrollbar: 0,
      theme: 'minimal-dark'
    };

    this.router.events.subscribe((e) => {
      if (e instanceof NavigationEnd ) {
        this.currentRoute = e.url;
      }
    });


  }

  ngOnInit() {
    this.layoutEvents.getRtl().subscribe((rtl: boolean) => {
      this.rtl = rtl;
    });

    this.currentRoute = this.location.path();
  }


}
