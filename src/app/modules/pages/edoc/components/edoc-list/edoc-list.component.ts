import { Component, OnInit, HostBinding } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { SITE_NAME_PREFIX } from '../../../../../shared/_constants/constants';

import { Page } from '../../../../../shared/_models/page.model';
import { EdocFilterComponent } from '../edoc-filter/edoc-filter.component';
import { EdocService } from '../../services/edoc.service';
import { PageEventsService } from '../../../../../shared/_events/page-events.service';
import { LayoutEventsService } from '../../../../../shared/_events/layout-events.service';

@Component({
  selector: 'app-edoc-list',
  templateUrl: './edoc-list.component.html',
  styleUrls: ['./edoc-list.component.scss']
})


export class EdocListComponent implements OnInit {
  @HostBinding('class.rtl') rtl: boolean;

  edoc: Page;
  title: string;
  edocList;
  infinitScroll;
  anchorsState: Object;

  constructor(
    private titleService: Title,
    private edocService: EdocService,
    private pageEventsService: PageEventsService,
    private layoutEvents: LayoutEventsService
  ) {
    this.rtl = false;
  }

  ngOnInit() {
    this.edoc = this.edocService.getEdoc();
    this.titleService.setTitle(SITE_NAME_PREFIX + this.edoc.title);
    this.edocList = this.edocService.getEdoc();
    this.infinitScroll = this.edocService.getInfinitScroll();
    
    this.anchorsState = this.edocService.getAnchorsStateList();
    this.pageEventsService.setAnchors(this.edoc.anchors);

    this.layoutEvents.getRtl().subscribe((rtl: boolean) => {
      this.rtl = rtl;
    });
  }

}
