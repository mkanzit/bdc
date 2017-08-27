import { Injectable } from '@angular/core';
import { HistoryList } from '../../../../shared/_models/history.model';

@Injectable()
export class HistoryService {

  history: HistoryList;
  historyArab: HistoryList;

  constructor() {
    this.history = {
      'title': 'Historique',
      'links': [
        {'href': '#', 'title': 'lien', 'text': '1- Lorem ipsum dolor da font'},
        {'href': '#', 'title': 'lien', 'text': '2- Lorem ipsum dolor da font'},
        {'href': '#', 'title': 'lien', 'text': '3- Lorem ipsum dolor da font'},
        {'href': '#', 'title': 'lien', 'text': '4- Lorem ipsum dolor da font'}
      ]
    }

    this.historyArab = {
      'title': 'التاريخ',
      'links': [
        {'href': '#', 'title': 'رابط', 'text': '1- أبجد هوز دولور دا هم'},
        {'href': '#', 'title': 'رابط', 'text': '2- أبجد هوز دولور دا هم'},
        {'href': '#', 'title': 'رابط', 'text': '3- أبجد هوز دولور دا هم'},
        {'href': '#', 'title': 'رابط', 'text': '4- أبجد هوز دولور دا هم'}
      ]
    };
  }

  getHistory() {
    return this.history;
  }

  getHistoryArab() {
    return this.historyArab;
  }

}
