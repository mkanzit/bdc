import { Component, OnInit, Input, HostBinding } from '@angular/core';

import { Title } from '@angular/platform-browser';
import { SITE_NAME_PREFIX } from '../../../../../shared/_constants/constants';

import { EdocFilterComponent } from '../edoc-filter/edoc-filter.component'
import { EdocService } from '../../services/edoc.service';
import { Page } from '../../../../../shared/_models/page.model';
import { PageEventsService } from '../../../../../shared/_events/page-events.service';
import { LayoutEventsService } from '../../../../../shared/_events/layout-events.service';


@Component({
  selector: 'app-edoc-detail',
  templateUrl: './edoc-detail.component.html',
  styleUrls: ['./edoc-detail.component.scss']
})

export class EdocDetailComponent implements OnInit {
  @HostBinding('class.rtl') rtl: boolean;

  edocDetail: Page;
  title: string;
  anchorsState: Object;


  constructor(
    private edocService: EdocService,
    private titleService: Title,
    private pageEventsService: PageEventsService,
    private layoutEvents: LayoutEventsService
  ) {
    this.rtl = false;
  }

  ngOnInit() {
    this.title = this.edocService.getTitle();
    this.edocDetail = this.edocService.getEdocDetails();
    this.titleService.setTitle(SITE_NAME_PREFIX + this.edocDetail.title);
    this.anchorsState = this.edocService.getAnchorsState();
    this.pageEventsService.setAnchors(this.edocDetail.anchors);
    
    this.layoutEvents.getRtl().subscribe((rtl: boolean) => {
      this.rtl = rtl;
    });
  }

}
