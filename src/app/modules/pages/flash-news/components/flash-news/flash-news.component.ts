import { Component, OnInit, HostBinding } from '@angular/core';

import { Title } from '@angular/platform-browser';
import { SITE_NAME_PREFIX } from '../../../../../shared/_constants/constants';

import { Page } from '../../../../../shared/_models/page.model';
import { FlashNewsService } from '../../services/flash-news.service';
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
import { BlockFlashNewsComponent } from '../../../../../components/pages/block-flash-news/block-flash-news.component';

@Component({
  selector: 'app-flash-news',
  templateUrl: './flash-news.component.html',
  styleUrls: ['./flash-news.component.scss']
})
export class FlashNewsComponent implements OnInit {
  @HostBinding('class.rtl') rtl: boolean;

  flashNews: Page;
  anchored: boolean;
  anchorsState: Object;

  constructor(
    private titleService: Title,
    private flashNewsService: FlashNewsService,
    private pageEventsService: PageEventsService,
    private layoutEvents: LayoutEventsService
  ) {
    this.rtl = false;
  }

  ngOnInit() {
    this.flashNews = this.flashNewsService.getFlashNews();
    this.titleService.setTitle(SITE_NAME_PREFIX + this.flashNews.title);
    this.anchorsState = this.flashNewsService.getAnchorsStateList();
    this.pageEventsService.setAnchors(this.flashNews.anchors);

    this.layoutEvents.getRtl().subscribe((rtl: boolean) => {
      this.rtl = rtl;
    });
  }
}
