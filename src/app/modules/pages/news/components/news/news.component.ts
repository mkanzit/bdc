import { Component, OnInit, HostBinding } from '@angular/core';

import { Title } from '@angular/platform-browser';
import { SITE_NAME_PREFIX } from '../../../../../shared/_constants/constants';

import { Page } from '../../../../../shared/_models/page.model';
import { NewsService } from '../../services/news.service';
import { PageEventsService } from '../../../../../shared/_events/page-events.service';
import { LayoutEventsService } from '../../../../../shared/_events/layout-events.service';

import { BreadcrumbComponent } from '../../../../../components/pages/breadcrumb/breadcrumb.component';
import { MenuAsideComponent } from '../../../../../components/pages/menu-aside/menu-aside.component';
import { ThemeSimpleComponent } from '../../../../../components/pages/theme-simple/theme-simple.component';
import { TarificationsComponent } from '../../../../../components/pages/tarifications/tarifications.component';
import { OnlineEditorComponent } from '../../../../../components/pages/online-editor/online-editor.component';
import { Mobile4RemonteesComponent } from '../../../../../components/pages/mobile-4-remontees/mobile-4-remontees.component';
import { SimpleTextIllustrationComponent } from '../../../../../components/pages/simple-text-illustration/simple-text-illustration.component';
import { OrangeCareComponent } from '../../../../../components/pages/orange-care/orange-care.component';
import { BlockNewsComponent } from '../../../../../components/pages/block-news/block-news.component';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {


  @HostBinding('class.rtl') rtl: boolean;

  news: Page;
  anchored: boolean;
  anchorsState: Object;

  constructor(
    private titleService: Title,
    private newsService: NewsService,
    private pageEventsService: PageEventsService,
    private layoutEvents: LayoutEventsService
  ) {
    this.rtl = false;
  }

  ngOnInit() {
    this.news = this.newsService.getNews();
    this.titleService.setTitle(SITE_NAME_PREFIX + this.news.title);
    this.anchorsState = this.newsService.getAnchorsStateList();
    this.pageEventsService.setAnchors(this.news.anchors);

    this.layoutEvents.getRtl().subscribe((rtl: boolean) => {
      this.rtl = rtl;
    });

  }

}
