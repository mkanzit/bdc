import { Component, OnInit, HostBinding } from '@angular/core';

import { Page } from '../../../../../shared/_models/page.model';
import { DetailService } from '../../services/detail.service';
import { PageEventsService } from '../../../../../shared/_events/page-events.service';
import { LayoutEventsService } from '../../../../../shared/_events/layout-events.service';

import { Title } from '@angular/platform-browser';
import { SITE_NAME_PREFIX } from '../../../../../shared/_constants/constants';

import { BreadcrumbComponent } from '../../../../../components/pages/breadcrumb/breadcrumb.component';
import { MenuAsideComponent } from '../../../../../components/pages/menu-aside/menu-aside.component';
import { BlockDetailComponent } from '../../../../../components/pages/block-detail/block-detail.component';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {

  @HostBinding('class.rtl') rtl: boolean;

  detail: Page;
  anchored: boolean;
  title: string;
  anchorsState: Object;

  constructor(
    private titleService: Title,
    private detailService: DetailService,
    private layoutEvents: LayoutEventsService,
    private pageEventsService: PageEventsService
  ) {
    this.rtl = false;
  }

  ngOnInit() {
    this.title = this.detailService.getTitle();
    this.titleService.setTitle(SITE_NAME_PREFIX + this.title);
    this.detail = this.detailService.getDetail();
    this.anchorsState = this.detailService.getAnchorsState();
    this.pageEventsService.setAnchors(this.detail.anchors);

    this.layoutEvents.getRtl().subscribe((rtl: boolean) => {
      this.rtl = rtl;
    });
  }

}
