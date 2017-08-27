import { Injectable } from '@angular/core';
import { FavoriteList } from '../../../../shared/_models/favorites.model';


@Injectable()
export class FavoritesService {

  favorites: FavoriteList;
  favoritesArab: FavoriteList;

  constructor() {
    this.favorites = {
      'title': 'Favoris',
      'links': [
        {'href': '#', 'title': 'lien', 'text': '1- Lorem ipsum dolor da font'},
        {'href': '#', 'title': 'lien', 'text': '2- Lorem ipsum dolor da font'},
        {'href': '#', 'title': 'lien', 'text': '3- Lorem ipsum dolor da font'},
        {'href': '#', 'title': 'lien', 'text': '4- Lorem ipsum dolor da font'}
      ]
    };

    this.favoritesArab = {
      'title': 'المفضلة',
      'links': [
        {'href': '#', 'title': 'رابط', 'text': '1- أبجد هوز دولور دا هم'},
        {'href': '#', 'title': 'رابط', 'text': '2- أبجد هوز دولور دا هم'},
        {'href': '#', 'title': 'رابط', 'text': '3- أبجد هوز دولور دا هم'},
        {'href': '#', 'title': 'رابط', 'text': '4- أبجد هوز دولور دا هم'}
      ]
    };
  }

  getFavorites() {
    return this.favorites;
  }

  getFavoritesArab() {
    return this.favoritesArab;
  }

}
