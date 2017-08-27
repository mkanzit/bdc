import { Component, OnInit, HostBinding } from '@angular/core';

import { Title } from '@angular/platform-browser';
import { SITE_NAME_PREFIX } from '../../../../../shared/_constants/constants';

import { Page } from '../../../../../shared/_models/page.model';
import { LayoutEventsService } from '../../../../../shared/_events/layout-events.service';

import { Mobile4RemonteesComponent } from '../../../../../components/pages/mobile-4-remontees/mobile-4-remontees.component';

import { CatalogueService } from '../../services/catalogue.service';

@Component({
  selector: 'app-catalogue-details',
  templateUrl: './catalogue-details.component.html',
  styleUrls: ['./catalogue-details.component.scss']
})
export class CatalogueDetailsComponent implements OnInit {
  @HostBinding('class.rtl') rtl: boolean;

  terminal: Page;
  selected: number;
  anchorsState: Object;


  constructor(
    private catalogueService: CatalogueService,
    private titleService: Title,
    private layoutEvents: LayoutEventsService
  ) {
    this.rtl = false;
    this.selected = 0;
  }

  ngOnInit() {
    this.terminal = this.catalogueService.getCatalogueDetails();
    this.titleService.setTitle(SITE_NAME_PREFIX + this.terminal.title);
    this.anchorsState = this.catalogueService.getAnchorsStateList();

    this.layoutEvents.getRtl().subscribe((rtl: boolean) => {
      this.rtl = rtl;
    });
  }

  selectTab($event, idx) {
    $event.preventDefault();
    this.selected = idx;
  }

}
