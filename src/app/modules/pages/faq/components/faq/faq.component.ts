import { Component, OnInit, HostBinding } from '@angular/core';

import { Title } from '@angular/platform-browser';
import { SITE_NAME_PREFIX } from '../../../../../shared/_constants/constants';

import { Page } from '../../../../../shared/_models/page.model';
import { FaqService } from '../../services/faq.service';
import { PageEventsService } from '../../../../../shared/_events/page-events.service';
import { LayoutEventsService } from '../../../../../shared/_events/layout-events.service';


import { BreadcrumbComponent } from '../../../../../components/pages/breadcrumb/breadcrumb.component';
import { BlockFaqComponent } from '../../../../../components/pages/block-faq/block-faq.component';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.scss']
})
export class FaqComponent implements OnInit {
  @HostBinding('class.rtl') rtl: boolean;

  faq: Page;
  hasFilter: boolean;
  anchorsState: Object;


  constructor(
    private titleService: Title,
    private faqService: FaqService,
    private pageEventsService: PageEventsService,
    private layoutEvents: LayoutEventsService
  ) {
    this.hasFilter = true;
    this.rtl = false;
  }

  ngOnInit() {
    this.faq = this.faqService.getFaq();
    this.titleService.setTitle(SITE_NAME_PREFIX + this.faq.title);
    this.anchorsState = this.faqService.getAnchorsState();

    this.layoutEvents.getRtl().subscribe((rtl: boolean) => {
      this.rtl = rtl;
    });
  }

}
