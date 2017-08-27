import { Injectable } from '@angular/core';
import { Page } from '../../../../shared/_models/page.model';

@Injectable()
export class MaintenanceService {

  maintenance: Page;

  constructor() {
    this.maintenance = {
      'title': 'Maintenance',
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
            'href': '/maintenance',
            'text': 'Maintenance',
            'title': 'Maintenance'
          }
        ]
      },
      'anchors': {
        'title': 'Liens interne',
        'links': [
          {'href': '#', 'title': 'lien', 'text': '1- Lorem ipsum dolor Maintenance'},
          {'href': '#', 'title': 'lien', 'text': '2- Lorem ipsum dolor Maintenance'},
          {'href': '#', 'title': 'lien', 'text': '3- Lorem ipsum dolor Maintenance'},
          {'href': '#', 'title': 'lien', 'text': '4- Lorem ipsum dolor Maintenance'}
        ]
      },
      'blocks': [
        {
          'type': 'maintenance',
          'classes': ['block', 'maintenance'],
          'title': '',
          'content': [
            {
              'title': 'Désolé, notre site Web est en maintenance.',
              'html': '<p class="mbm">Le site est actuellement en cours de maintenance. <br> Nous faisons tous les efforts pour être de retour en ligne sous peu.<br> Site devrait être de retour le vendredi 1er Mars 2016, 16:00 GMT.</p><p class="mbm">Plus d\'infos sur Orange Vous pouvez visiter notre site corporate www.orange.ma</p>'
            }
          ]
        }
      ]
    }
  }

  getMaintenance() {
    return this.maintenance;
  }

}
