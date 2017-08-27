import { Component, OnInit, HostBinding } from '@angular/core';

import { Page } from '../../../../../shared/_models/page.model';
import { EdocService } from '../../services/edoc.service';
import { PageEventsService } from '../../../../../shared/_events/page-events.service';
import { LayoutEventsService } from '../../../../../shared/_events/layout-events.service';

import { Title } from '@angular/platform-browser';
import { SITE_NAME_PREFIX } from '../../../../../shared/_constants/constants';

import { BreadcrumbComponent } from '../../../../../components/pages/breadcrumb/breadcrumb.component';
import { MenuAsideComponent } from '../../../../../components/pages/menu-aside/menu-aside.component';
import { EdocListComponent } from '../edoc-list/edoc-list.component';
import { EdocDetailComponent } from '../edoc-detail/edoc-detail.component';


@Component({
  selector: 'app-edoc',
  templateUrl: './edoc.component.html',
  styleUrls: ['./edoc.component.scss']
})
export class EdocComponent implements OnInit {

  @HostBinding('class.rtl') rtl: Boolean;
  edoc: Page;
  anchored: boolean;
  title: string;

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
    this.pageEventsService.setAnchors(this.edoc.anchors);
  }

}
