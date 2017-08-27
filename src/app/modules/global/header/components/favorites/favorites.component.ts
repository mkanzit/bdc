import { Component, OnInit, HostBinding } from '@angular/core';

import { FavoritesService } from '../../services/favorites.service';
import { FavoriteList } from '../../../../../shared/_models/favorites.model';
import { LayoutEventsService } from '../../../../../shared/_events/layout-events.service';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.scss']
})
export class FavoritesComponent implements OnInit {

  @HostBinding('class.rtl') rtl: boolean;
  favorites: FavoriteList;
  csOptions: Object;

  constructor(
    private favoritesService: FavoritesService,
    private layoutEvents: LayoutEventsService
  ) {
    this.rtl = false;
    this.csOptions  = {
      axis: 'y',
      autoHideScrollbar: true,
      alwaysShowScrollbar: 0,
      theme: 'minimal-dark'
    };
  }

  ngOnInit() {
    this.favorites = this.favoritesService.getFavorites();

    this.layoutEvents.getRtl().subscribe((rtl: boolean) => {
      this.rtl = rtl;
      this.changeUI(rtl);
    });
  }

  private changeUI(rtl: boolean) {
    if ( rtl === true ) {
      this.favorites = this.favoritesService.getFavoritesArab();
    } else {
      this.favorites = this.favoritesService.getFavorites();
    }
  }

}
