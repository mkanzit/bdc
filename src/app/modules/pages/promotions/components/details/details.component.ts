import { Component, OnInit, HostBinding } from '@angular/core';

import { Page } from '../../../../../shared/_models/page.model';
import { PromotionsService } from '../../services/promotions.service';
import { PageEventsService } from '../../../../../shared/_events/page-events.service';
import { LayoutEventsService } from '../../../../../shared/_events/layout-events.service';

import { Title } from '@angular/platform-browser';
import { SITE_NAME_PREFIX } from '../../../../../shared/_constants/constants';

import { BreadcrumbComponent } from '../../../../../components/pages/breadcrumb/breadcrumb.component';
import { MenuAsideComponent } from '../../../../../components/pages/menu-aside/menu-aside.component';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  @HostBinding('class.rtl') rtl: boolean;

  detail: Page;
  anchored: boolean;
  title: String;
  anchorsState : Object;

  constructor(
    private titleService: Title,
    private detailService: PromotionsService,
    private layoutEvents: LayoutEventsService,
    private pageEventsService: PageEventsService
  ) {
    this.rtl = false;
  }

  ngOnInit() {
    this.detail = this.detailService.getPromotionsDetails();
    this.titleService.setTitle(SITE_NAME_PREFIX + this.detail.title);
    this.anchorsState = this.detailService.getAnchorsStateList();
    this.pageEventsService.setAnchors(this.detail.anchors);

    this.layoutEvents.getRtl().subscribe((rtl: boolean) => {
      this.rtl = rtl;
    });
  }

}
