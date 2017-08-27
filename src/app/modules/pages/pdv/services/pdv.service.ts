import { Injectable } from '@angular/core';
import { Page } from '../../../../shared/_models/page.model';

@Injectable()
export class PdvService {

  pdv: Page;
  anchors: Object;

  constructor() {
    this.pdv = {
      'title': 'Nos agences',
      'description': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod.',
      'image': {
        'src': '',
        'alt': '',
        'title': ''
      },
      'breadcrumb': {
        'blocktype': 'breadcrumb',
        'blockdata': [
          {
            'href': '',
            'text': 'Nos points de vente',
            'title': 'Nos points de vente'
          }
        ]
      },
      'anchors': {
        'title': 'Liens interne',
        'links': [
          {'href': '#', 'title': 'lien', 'text': '1- Lorem ipsum dolor pdv'},
          {'href': '#', 'title': 'lien', 'text': '2- Lorem ipsum dolor pdv'},
          {'href': '#', 'title': 'lien', 'text': '3- Lorem ipsum dolor pdv'},
          {'href': '#', 'title': 'lien', 'text': '4- Lorem ipsum dolor pdv'}
        ]
      },
      'blocks': []
    };

    this.anchors = {
      'suggestion': true,
      'like': true,
      'scripting': true,
      'process': true
    };
  }

  getPDV() {
    return this.pdv;
  }

  getAnchorsState() {
    return this.anchors;
  }

}
