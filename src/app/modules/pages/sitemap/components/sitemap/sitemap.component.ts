import { Component, OnInit, HostBinding } from '@angular/core';

import { Title } from '@angular/platform-browser';
import { SITE_NAME_PREFIX } from '../../../../../shared/_constants/constants';

import { PageEventsService } from '../../../../../shared/_events/page-events.service';
import { LayoutEventsService } from '../../../../../shared/_events/layout-events.service';

import { Page } from '../../../../../shared/_models/page.model';

import { BreadcrumbComponent } from '../../../../../components/pages/breadcrumb/breadcrumb.component';
import { BlockSitemapComponent } from '../../../../../components/pages/block-sitemap/block-sitemap.component';

import { SitemapService } from '../../services/sitemap.service';


@Component({
  selector: 'app-sitemap',
  templateUrl: './sitemap.component.html',
  styleUrls: ['./sitemap.component.scss']
})
export class SitemapComponent implements OnInit {

  @HostBinding('class.rtl') rtl: Boolean;
  sitemap: Page;
  anchored: boolean;

  constructor(
    private titleService: Title,
    private sitemapService: SitemapService,
    private pageEventsService: PageEventsService,
    private layoutEvents: LayoutEventsService
  ) {
    this.rtl = false;
  }

  ngOnInit() {
    this.sitemap = this.sitemapService.getSitemap();
    this.titleService.setTitle(SITE_NAME_PREFIX + this.sitemap.title);

    this.layoutEvents.getRtl().subscribe((rtl: boolean) => {
      this.rtl = rtl;
    });
  }

}
