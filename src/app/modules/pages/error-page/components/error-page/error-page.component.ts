import { Component, OnInit, HostBinding  } from '@angular/core';

import { Title } from '@angular/platform-browser';
import { SITE_NAME_PREFIX } from '../../../../../shared/_constants/constants';

import { Page } from '../../../../../shared/_models/page.model';
import { ErrorPageService } from '../../services/error-page.service';
import { PageEventsService } from '../../../../../shared/_events/page-events.service';
import { LayoutEventsService } from '../../../../../shared/_events/layout-events.service';

import { MenuAsideComponent } from '../../../../../components/pages/menu-aside/menu-aside.component';
import { BlockSitemapComponent } from '../../../../../components/pages/block-sitemap/block-sitemap.component';


@Component({
  selector: 'app-error-page',
  templateUrl: './error-page.component.html',
  styleUrls: ['./error-page.component.scss']
})
export class ErrorPageComponent implements OnInit {
  @HostBinding('class.rtl') rtl: boolean;

  errorPage: Page;
  anchored: boolean;

  constructor(
    private titleService: Title,
    private errorPageService: ErrorPageService,
    private pageEventsService: PageEventsService,
    private layoutEvents: LayoutEventsService
  ) {
    this.rtl = false;
  }

  ngOnInit() {
    this.errorPage = this.errorPageService.getErrorPage();
    this.titleService.setTitle(SITE_NAME_PREFIX + this.errorPage.title);
    this.pageEventsService.setAnchors(this.errorPage.anchors);

    this.layoutEvents.getRtl().subscribe((rtl: boolean) => {
      this.rtl = rtl;
    });
  }

}
