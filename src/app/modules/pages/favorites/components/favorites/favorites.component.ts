import { Component, OnInit, HostBinding } from '@angular/core';

import { Page } from '../../../../../shared/_models/page.model';
import { FavoritesService } from '../../services/favorites.service';
import { PageEventsService } from '../../../../../shared/_events/page-events.service';
import { LayoutEventsService } from '../../../../../shared/_events/layout-events.service';

import { Title } from '@angular/platform-browser';
import { SITE_NAME_PREFIX } from '../../../../../shared/_constants/constants';

import { BreadcrumbComponent } from '../../../../../components/pages/breadcrumb/breadcrumb.component';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.scss']
})
export class FavoritesComponent implements OnInit {
  @HostBinding('class.rtl') rtl: boolean;

  favorites: Page;
  anchorsState: Object;

  constructor(
    private titleService: Title,
    private favoritesService: FavoritesService,
    private pageEventsService: PageEventsService,
    private layoutEvents: LayoutEventsService
  ) {
    this.rtl = false;
  }

  ngOnInit() {
    this.favorites = this.favoritesService.getFavorites();
    this.titleService.setTitle(SITE_NAME_PREFIX + this.favorites.title);
    this.anchorsState = this.favoritesService.getAnchorsState();
    this.pageEventsService.setAnchors(this.favorites.anchors);

    this.layoutEvents.getRtl().subscribe((rtl: boolean) => {
      this.rtl = rtl;
    });
  }

}
