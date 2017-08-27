import { Component, OnInit, Input, HostBinding } from '@angular/core';

import { Page } from '../../../../../shared/_models/page.model';
import { OfferImigrationsService } from '../../services/offer-migrations.service';
import { BreadcrumbComponent } from '../../../../../components/pages/breadcrumb/breadcrumb.component';
import { MenuAsideComponent } from '../../../../../components/pages/menu-aside/menu-aside.component';

import { Title } from '@angular/platform-browser';
import { SITE_NAME_PREFIX } from '../../../../../shared/_constants/constants';

import { PageEventsService } from '../../../../../shared/_events/page-events.service';
import { LayoutEventsService } from '../../../../../shared/_events/layout-events.service';


@Component({
  selector: 'app-offer-migrations',
  templateUrl: './offer-migrations.component.html',
  styleUrls: ['./offer-migrations.component.scss']
})
export class OfferImigrationsComponent implements OnInit {

  @HostBinding('class.rtl') rtl: Boolean;

  offerImigrations: Page;
  anchored: boolean;

  constructor(
    private titleService: Title,
    private offerImigrationsService: OfferImigrationsService,
    private pageEventsService: PageEventsService,
    private layoutEvents: LayoutEventsService
  ) {
    this.rtl = false;
  }

  ngOnInit() {
    this.offerImigrations = this.offerImigrationsService.getOfferImigrations();
    this.titleService.setTitle(SITE_NAME_PREFIX + this.offerImigrations.title)
    this.pageEventsService.setAnchors(this.offerImigrations.anchors);

    this.layoutEvents.getRtl().subscribe((rtl: boolean) => {
      this.rtl = rtl;
    });
  }

}
