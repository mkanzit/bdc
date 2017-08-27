import { Component, OnInit, HostBinding } from '@angular/core';

import { Title } from '@angular/platform-browser';
import { SITE_NAME_PREFIX } from '../../../../../shared/_constants/constants';

import { Page } from '../../../../../shared/_models/page.model';
import { HomeService } from '../../services/home.service';
import { PageEventsService } from '../../../../../shared/_events/page-events.service';
import { LayoutEventsService } from '../../../../../shared/_events/layout-events.service';

import { BreadcrumbComponent } from '../../../../../components/pages/breadcrumb/breadcrumb.component';
import { MenuAsideComponent } from '../../../../../components/pages/menu-aside/menu-aside.component';
import { NotificationsComponent } from '../../../../../components/pages/notifications/notifications.component';
import { SearchComponent } from '../../../../global/search/components/search/search.component';
import { TopNewsComponent } from '../../../../../components/pages/top-news/top-news.component';
import { TopFaqComponent } from '../../../../../components/pages/top-faq/top-faq.component';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  @HostBinding('class.rtl') rtl: boolean;

  home: Page;

  constructor(
    private titleService: Title,
    private homeService: HomeService,
    private pageEventsService: PageEventsService,
    private layoutEvents: LayoutEventsService
  ) {
    this.rtl = false;
  }

  ngOnInit() {
    this.home = this.homeService.getHome();
    this.titleService.setTitle(SITE_NAME_PREFIX + this.home.title);
    this.pageEventsService.setAnchors(this.home.anchors);

    this.layoutEvents.getRtl().subscribe((rtl: boolean) => {
      this.rtl = rtl;
    });
  }

}
