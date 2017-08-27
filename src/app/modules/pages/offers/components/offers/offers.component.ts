import { Component, OnInit, HostBinding } from '@angular/core';

import { Title } from '@angular/platform-browser';
import { SITE_NAME_PREFIX } from '../../../../../shared/_constants/constants';

import { Page } from '../../../../../shared/_models/page.model';
import { OffersService } from '../../services/offers.service';
import { PageEventsService } from '../../../../../shared/_events/page-events.service';


import { BreadcrumbComponent } from '../../../../../components/pages/breadcrumb/breadcrumb.component';
import { MenuAsideComponent } from '../../../../../components/pages/menu-aside/menu-aside.component';
import { ThemeSimpleComponent } from '../../../../../components/pages/theme-simple/theme-simple.component';
import { TarificationsComponent } from '../../../../../components/pages/tarifications/tarifications.component';
import { OnlineEditorComponent } from '../../../../../components/pages/online-editor/online-editor.component';
import { Mobile4RemonteesComponent } from '../../../../../components/pages/mobile-4-remontees/mobile-4-remontees.component';
import { SimpleTextIllustrationComponent } from '../../../../../components/pages/simple-text-illustration/simple-text-illustration.component';
import { OrangeCareComponent } from '../../../../../components/pages/orange-care/orange-care.component';
import { BlockFaqComponent } from '../../../../../components/pages/block-faq/block-faq.component';
import { LayoutEventsService } from '../../../../../shared/_events/layout-events.service';

@Component({
  selector: 'app-offers',
  templateUrl: './offers.component.html',
  styleUrls: ['./offers.component.scss']
})
export class OffersComponent implements OnInit {
  @HostBinding('class.rtl') rtl: boolean;

  offers: Page;
  anchored: boolean;
  anchorsState: Object;

  constructor(
    private titleService: Title,
    private offersService: OffersService,
    private layoutEvents: LayoutEventsService,
    private pageEventsService: PageEventsService
  ) {
    this.rtl = false;
  }

  ngOnInit() {
    this.offers = this.offersService.getOffers();
    this.titleService.setTitle(SITE_NAME_PREFIX + this.offers.title);
    this.pageEventsService.setAnchors(this.offers.anchors);
    this.anchorsState = this.offersService.getAnchorsState();

    this.layoutEvents.getRtl().subscribe((rtl: boolean) => {
      this.rtl = rtl;
      this.changeUI(rtl);
    });
  }
  
  private changeUI(rtl: boolean) {
    if ( rtl === true ) {
      this.offers = this.offersService.getOffersArab();
      this.titleService.setTitle(SITE_NAME_PREFIX + this.offers.title);
      this.pageEventsService.setAnchors(this.offers.anchors);
    } else {
      this.offers = this.offersService.getOffers();
      this.titleService.setTitle(SITE_NAME_PREFIX + this.offers.title);
      this.pageEventsService.setAnchors(this.offers.anchors);
    }
  }
}
