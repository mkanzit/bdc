import { Component, OnInit, HostBinding } from '@angular/core';

import { Title } from '@angular/platform-browser';
import { SITE_NAME_PREFIX } from '../../../../../shared/_constants/constants';


import { Page } from '../../../../../shared/_models/page.model';
import { NotificationsService } from '../../services/notifications.service';
import { PageEventsService } from '../../../../../shared/_events/page-events.service';
import { LayoutEventsService } from '../../../../../shared/_events/layout-events.service';

import { BreadcrumbComponent } from '../../../../../components/pages/breadcrumb/breadcrumb.component';
import { MenuAsideComponent } from '../../../../../components/pages/menu-aside/menu-aside.component';
import { BlockNotificationsComponent } from '../../../../../components/pages/block-notifications/block-notifications.component';

@Component({
  selector: 'app-my-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.scss']
})
export class NotificationsComponent implements OnInit {
  @HostBinding('class.rtl') rtl: boolean;

  notifications: Page;
  anchored: boolean;
  anchorsState: Object;


  constructor(
    private titleService: Title,
    private notificationsService: NotificationsService,
    private pageEventsService: PageEventsService,
    private layoutEvents: LayoutEventsService
  ) {
    this.rtl = false;
  }

  ngOnInit() {
    this.notifications = this.notificationsService.getNotifications();
    this.titleService.setTitle(SITE_NAME_PREFIX + this.notifications.title);
    this.anchorsState = this.notificationsService.getAnchorsStateList();
    this.pageEventsService.setAnchors(this.notifications.anchors);
    
    this.layoutEvents.getRtl().subscribe((rtl: boolean) => {
      this.rtl = rtl;
    });
  }
}
