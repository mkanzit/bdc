import { Component, OnInit, Input, HostBinding } from '@angular/core';

import { Page } from '../../../../../shared/_models/page.model';
import { ProcessService } from '../../services/process.service';
import { PageEventsService } from '../../../../../shared/_events/page-events.service';
import { LayoutEventsService } from '../../../../../shared/_events/layout-events.service';

import { Title } from '@angular/platform-browser';
import { SITE_NAME_PREFIX } from '../../../../../shared/_constants/constants';

import { BreadcrumbComponent } from '../../../../../components/pages/breadcrumb/breadcrumb.component';
import { MenuAsideComponent } from '../../../../../components/pages/menu-aside/menu-aside.component';
import { ProcessListComponent } from '../process-list/process-list.component';
import { ProcessDetailComponent } from '../process-detail/process-detail.component';


@Component({
  selector: 'app-process',
  templateUrl: './process.component.html',
  styleUrls: ['./process.component.scss']
})

export class ProcessComponent implements OnInit {

  @HostBinding('class.rtl') rtl: boolean;

  process: Page;
  anchored: boolean;

  constructor(
    private titleService: Title,
    private processService: ProcessService,
    private pageEventsService: PageEventsService,
    private layoutEvents: LayoutEventsService
  ) {
    this.rtl = false;
  }

  ngOnInit() {
    this.layoutEvents.getRtl().subscribe((rtl: boolean) => {
      this.rtl = rtl;
    });

    /*this.process = this.processService.getProcess();
    this.titleService.setTitle(SITE_NAME_PREFIX + this.process.title);
    this.pageEventsService.setAnchors(this.process.anchors);*/
  }

}
