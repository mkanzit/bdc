import { Component, OnInit, HostBinding } from '@angular/core';

import { Title } from '@angular/platform-browser';
import { SITE_NAME_PREFIX } from '../../../../../shared/_constants/constants';

import { Page } from '../../../../../shared/_models/page.model';
import { AlertsService } from '../../services/alerts.service';
import { PageEventsService } from '../../../../../shared/_events/page-events.service';
import { LayoutEventsService } from '../../../../../shared/_events/layout-events.service';

import { BreadcrumbComponent } from '../../../../../components/pages/breadcrumb/breadcrumb.component';
import { MenuAsideComponent } from '../../../../../components/pages/menu-aside/menu-aside.component';

@Component({
  selector: 'app-alerts',
  templateUrl: './alerts.component.html',
  styleUrls: ['./alerts.component.scss']
})
export class AlertsComponent implements OnInit {
  @HostBinding('class.rtl') rtl: boolean;

  alerts: Page;
  //anchored: boolean;
  anchorsState: Object;

  constructor(
    private titleService: Title,
    private alertsService: AlertsService,
    private pageEventsService: PageEventsService,
    private layoutEvents: LayoutEventsService
  ) {
    this.rtl = false;
  }

  ngOnInit() {
    this.alerts = this.alertsService.getAlerts();
    this.titleService.setTitle(SITE_NAME_PREFIX + this.alerts.title);
    this.anchorsState = this.alertsService.getAnchorsStateList();
    this.pageEventsService.setAnchors(this.alerts.anchors);

    this.layoutEvents.getRtl().subscribe((rtl: boolean) => {
      this.rtl = rtl;
    });
  }

}
