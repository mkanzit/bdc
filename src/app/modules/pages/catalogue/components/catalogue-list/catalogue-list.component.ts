import { Component, OnInit, HostBinding } from '@angular/core';

import { Title } from '@angular/platform-browser';
import { SITE_NAME_PREFIX } from '../../../../../shared/_constants/constants';

import { Page } from '../../../../../shared/_models/page.model';
import { LayoutEventsService } from '../../../../../shared/_events/layout-events.service';

import { Mobile4RemonteesComponent } from '../../../../../components/pages/mobile-4-remontees/mobile-4-remontees.component';

import { CatalogueService } from '../../services/catalogue.service';


@Component({
  selector: 'app-catalogue-list',
  templateUrl: './catalogue-list.component.html',
  styleUrls: ['./catalogue-list.component.scss']
})
export class CatalogueListComponent implements OnInit {
  @HostBinding('class.rtl') rtl: boolean;

  catalogues: Page;
  catFiltered;
  title: string;
  anchorsState: Object;

  active: number;
  categories: Array<Object>;

  constructor(
    private titleService: Title,
    private catalogueService: CatalogueService,
    private layoutEvents: LayoutEventsService
  ) {
    this.rtl = false;
    this.active = 0;
  }

  ngOnInit() {
    this.title = this.catalogueService.getTitle();
    this.catalogues = this.catalogueService.getCatalogue();
    this.titleService.setTitle(SITE_NAME_PREFIX + this.catalogues.title);
    this.categories = this.catalogueService.getCategories();

    this.catFiltered = { ...this.catalogues.blocks[0] };
    this.anchorsState = this.catalogueService.getAnchorsStateList();

    this.layoutEvents.getRtl().subscribe((rtl: boolean) => {
      this.rtl = rtl;
    });
  }

  showCat($event, i) {
    $event.preventDefault();
    this.active = i;
    const cat = $($event.target).attr('id');

    this.catFiltered.content = this.catalogues.blocks[0].content.filter((item) => {
      if ( cat === 'all' ) {
        return item;
      } else {
        return item.category === cat;
      }
    });
  }


  selectCat($event) {
    const cat = $event;

    this.catFiltered.content = this.catalogues.blocks[0].content.filter((item) => {
      if ( cat === 'all' ) {
        return item;
      } else {
        return item.category === cat;
      }
    });
  }

}
