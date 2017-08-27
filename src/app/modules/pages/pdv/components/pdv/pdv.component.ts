import { Component, OnInit, HostBinding } from '@angular/core';

import { Title } from '@angular/platform-browser';
import { SITE_NAME_PREFIX } from '../../../../../shared/_constants/constants';
import { BreadcrumbComponent } from '../../../../../components/pages/breadcrumb/breadcrumb.component';
import { MenuAsideComponent } from '../../../../../components/pages/menu-aside/menu-aside.component';
import { PdvFilterComponent } from '../pdv-filter/pdv-filter.component';
import { PdvListComponent } from '../pdv-list/pdv-list.component';
import { PdvMapComponent } from '../pdv-map/pdv-map.component';

import { Page } from '../../../../../shared/_models/page.model';
import { PageEventsService } from '../../../../../shared/_events/page-events.service';
import { PdvService } from '../../services/pdv.service';
import { LayoutEventsService } from '../../../../../shared/_events/layout-events.service';


@Component({
  selector: 'app-pdv',
  templateUrl: './pdv.component.html',
  styleUrls: ['./pdv.component.scss']
})
export class PdvComponent implements OnInit {
  @HostBinding('class.rtl') rtl: boolean;

  pdv: Page;
  anchorsState: Object;
  
  constructor(
    private titleService: Title,
    private pdvService: PdvService,
    private pageEventsService: PageEventsService,
    private layoutEvents: LayoutEventsService
  ) {
    this.rtl = false;
  }

  ngOnInit() {
    this.pdv = this.pdvService.getPDV();
    this.titleService.setTitle(SITE_NAME_PREFIX + this.pdv.title);
    this.anchorsState = this.pdvService.getAnchorsState();
    this.pageEventsService.setAnchors(this.pdv.anchors);

    this.layoutEvents.getRtl().subscribe((rtl: boolean) => {
      this.rtl = rtl;
    });
  }

}
