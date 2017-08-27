import { Component, OnInit, HostBinding } from '@angular/core';

import { Title } from '@angular/platform-browser';
import { SITE_NAME_PREFIX } from '../../../../../shared/_constants/constants';

import { Page } from '../../../../../shared/_models/page.model';
import { PromotionsService } from '../../services/promotions.service';
import { PageEventsService } from '../../../../../shared/_events/page-events.service';
import { LayoutEventsService } from '../../../../../shared/_events/layout-events.service';

import { BreadcrumbComponent } from '../../../../../components/pages/breadcrumb/breadcrumb.component';
import { MenuAsideComponent } from '../../../../../components/pages/menu-aside/menu-aside.component';
import { PromoFilterComponent } from '../filter/promo-filter.component';


@Component({
  selector: 'app-promotions',
  templateUrl: './promotions.component.html',
  styleUrls: ['./promotions.component.scss']
})
export class PromotionsComponent implements OnInit {
  @HostBinding('class.rtl') rtl: boolean;

  promotions: Page;
  anchorsState: Object;


  constructor(
    private titleService: Title,
    private promotionsService: PromotionsService,
    private pageEventsService: PageEventsService,
    private layoutEvents: LayoutEventsService
  ) {
    this.rtl = false;
  }

  ngOnInit() {
    this.promotions = this.promotionsService.getPromotions();
    this.titleService.setTitle(SITE_NAME_PREFIX + this.promotions.title);
    this.anchorsState = this.promotionsService.getAnchorsState();
    this.pageEventsService.setAnchors(this.promotions.anchors);

    this.layoutEvents.getRtl().subscribe((rtl: boolean) => {
      this.rtl = rtl;
    });
  }

}
