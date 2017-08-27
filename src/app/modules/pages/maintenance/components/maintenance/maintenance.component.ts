import { Component, OnInit, HostBinding } from '@angular/core';

import { Title } from '@angular/platform-browser';
import { SITE_NAME_PREFIX } from '../../../../../shared/_constants/constants';

import { Page } from '../../../../../shared/_models/page.model';
import { MaintenanceService } from '../../services/maintenance.service';
import { LayoutEventsService } from '../../../../../shared/_events/layout-events.service';

import { MenuAsideComponent } from '../../../../../components/pages/menu-aside/menu-aside.component';

@Component({
  selector: 'app-maintenance',
  templateUrl: './maintenance.component.html',
  styleUrls: ['./maintenance.component.scss']
})
export class MaintenanceComponent implements OnInit {
  @HostBinding('class.rtl') rtl: boolean;

  maintenance: Page;
  anchored: boolean;

  constructor(
    private titleService: Title,
    private maintenanceService: MaintenanceService,
    private layoutEvents: LayoutEventsService
  ) {
    this.rtl = false;
  }

  ngOnInit() {
    this.maintenance = this.maintenanceService.getMaintenance();
    this.titleService.setTitle(SITE_NAME_PREFIX + this.maintenance.title);
  
    this.layoutEvents.getRtl().subscribe((rtl: boolean) => {
      this.rtl = rtl;
    });
  }

}
