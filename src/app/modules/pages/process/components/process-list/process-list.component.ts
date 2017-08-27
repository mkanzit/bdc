import { Component, OnInit, HostBinding } from '@angular/core';

import { Title } from '@angular/platform-browser';
import { SITE_NAME_PREFIX } from '../../../../../shared/_constants/constants';

import { Page } from '../../../../../shared/_models/page.model';
import { ProcessService } from '../../services/process.service';
import { PageEventsService } from '../../../../../shared/_events/page-events.service';
import { LayoutEventsService } from '../../../../../shared/_events/layout-events.service';


@Component({
  selector: 'app-process-list',
  templateUrl: './process-list.component.html',
  styleUrls: ['./process-list.component.scss']
})


export class ProcessListComponent implements OnInit {
  @HostBinding('class.rtl') rtl: boolean;

  process: Page;
  anchored: boolean;
  anchorsState: Object;

  constructor(
    private titleService: Title,
    private processService: ProcessService,
    private pageEventsService: PageEventsService,
    private layoutEvents: LayoutEventsService
  ) {
    this.rtl = false;
  }

  ngOnInit() {
    this.process = this.processService.getProcess();
    this.titleService.setTitle(SITE_NAME_PREFIX +  this.process.title);
    this.anchorsState = this.processService.getAnchorsStateList();
    this.pageEventsService.setAnchors(this.process.anchors);

    this.layoutEvents.getRtl().subscribe((rtl: boolean) => {
      this.rtl = rtl;
    });
  }
}
