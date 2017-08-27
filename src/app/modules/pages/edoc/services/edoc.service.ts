import { Injectable } from '@angular/core';
import { Page } from '../../../../shared/_models/page.model';

@Injectable()
export class EdocService {

  edoc: Page;
  edocDetails: Page;
  infinitScroll: Object;
  anchors: Object;
  anchorsList: Object;

  constructor() {
    this.edoc = {
      'title': 'Orange - e-Documentation',
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
            'text': 'e-Documentation',
            'title': 'e-Documentation'
          }
        ]
      },
      'anchors': {
        'title': 'Liens interne',
        'links': [
          {'href': '#', 'title': 'lien', 'text': '1- Lorem ipsum dolor edoc'},
          {'href': '#', 'title': 'lien', 'text': '2- Lorem ipsum dolor edoc'},
          {'href': '#', 'title': 'lien', 'text': '3- Lorem ipsum dolor edoc'},
          {'href': '#', 'title': 'lien', 'text': '4- Lorem ipsum dolor edoc'}
        ]
      },
      'blocks': [
        {
          'type': 'edoc',
          'title': 'e-Documentation',
          'classes': ['block', 'block-edoc'],
          'content': [
            {
              'id': 1,
              'classes': ['item-av', 'item-av-position', 'mbm', 'bg-black', 'color-white'],
              'link': {
                'routerLink': 'details',
                'title': 'details',
                'text': 'Divertissement'
              },
              'img': {
                'alt': 'alt',
                'src': 'assets/imgs/contenus/visuel-70.jpg'
              }
            },
            {
              'id': 2,
              'classes': ['item-av', 'item-av-position', 'mbm', 'bg-black', 'color-white'],
              'link': {
                'routerLink': 'details',
                'title': 'details',
                'text': 'A l\'étranger'
              },
              'img': {
                'alt': 'alt',
                'src': 'assets/imgs/contenus/visuel-71.jpg'
              }
            },
            {
              'id': 3,
              'classes': ['item-av', 'item-av-position', 'mbm', 'bg-black', 'color-white'],
              'link': {
                'routerLink': 'details',
                'title': 'details',
                'text': 'Les Formulaires'
              },
              'img': {
                'alt': 'alt',
                'src': 'assets/imgs/contenus/visuel-72.jpg'
              }
            },
            {
              'id': 4,
              'classes': ['item-av', 'item-av-position', 'mbm', 'bg-black', 'color-white'],
              'link': {
                'routerLink': 'details',
                'title': 'details',
                'text': 'Pratique'
              },
              'img': {
                'alt': 'alt',
                'src': 'assets/imgs/contenus/visuel-73.jpg'
              }
            },
            {
              'id': 5,
              'classes': ['item-av', 'item-av-position', 'mbm', 'bg-black', 'color-white'],
              'link': {
                'routerLink': 'details',
                'title': 'details',
                'text': 'Divertissement'
              },
              'img': {
                'alt': 'alt',
                'src': 'assets/imgs/contenus/visuel-75.jpg'
              }
            },
            {
              'id': 6,
              'classes': ['item-av', 'item-av-position', 'mbm', 'bg-black', 'color-white'],
              'link': {
                'routerLink': 'details',
                'title': 'details',
                'text': 'Lorum upsum'
              },
              'img': {
                'alt': 'alt',
                'src': 'assets/imgs/contenus/visuel-77.jpg'
              }
            },
            {
              'id': 7,
              'classes': ['item-av', 'item-av-position', 'mbm', 'bg-black', 'color-white'],
              'link': {
                'routerLink': 'details',
                'title': 'details',
                'text': 'Lorum upsum'
              },
              'img': {
                'alt': 'alt',
                'src': 'assets/imgs/contenus/visuel-78.jpg'
              }
            },
            {
              'id': 8,
              'classes': ['item-av', 'item-av-position', 'mbm', 'bg-black', 'color-white'],
              'link': {
                'routerLink': 'details',
                'title': 'details',
                'text': 'Lorum upsum'
              },
              'img': {
                'alt': 'alt',
                'src': 'assets/imgs/contenus/visuel-70.jpg'
              }
            }
          ]
        },
      ]
    };

    this.edocDetails = {
      'title': 'e-Documentation : Catégorie A',
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
            'href': '/edoc',
            'text': 'Edoc',
            'title': 'Edoc'
          },
          {
            'href': '',
            'text': 'Catégorie A',
            'title': 'Catégorie A'
          }
        ]
      },
      'anchors': {
        'title': '',
        'links': []
      },
      'blocks': [
        {
          'type': 'edoc',
          'title': 'Edoc',
          'classes': ['block', 'block-edoc'],
          'content': [
            {
              'id': 1,
              'title': 'Lorem ipsum dolor sit amet, consectetur adipi elit, sed do eiusmod.',
              'desc': 'tempor incididunt ut labore et dolore magna aliqua. Ut enim reprehenderit in voluptate velit esse...',
              'classes': ['e-doc', 'mb50'],
              'icon': 'ic-document_Word',
              'downloadLink': {
                'classes': ['btn', 'btn--ms', 'btn-download'],
                'href': '#',
                'title': 'Télécharger',
                'text': 'Télécharger'
              },
              'viewLink': {
                'classes': ['btn', 'btn--ms', 'btn-view'],
                'href': '#',
                'title': 'Visualiser',
                'text': 'Visualiser'
              }
            },
            {
              'id': 2,
              'title': 'Lorem ipsum dolor sit amet, consectetur adipi elit, sed do eiusmod.',
              'desc': 'tempor incididunt ut labore et dolore magna aliqua. Ut enim reprehenderit in voluptate velit esse...',
              'classes': ['e-doc', 'mb50'],
              'icon': 'ic-PDF_file',
              'downloadLink': {
                'classes': ['btn', 'btn--ms', 'btn-download'],
                'href': '#',
                'title': 'Télécharger',
                'text': 'Télécharger'
              },
              'viewLink': {
                'classes': ['btn', 'btn--ms', 'btn-view'],
                'href': '#',
                'title': 'Visualiser',
                'text': 'Visualiser'
              }
            },
            {
              'id': 3,
              'title': 'Lorem ipsum dolor sit amet, consectetur adipi elit, sed do eiusmod.',
              'desc': 'tempor incididunt ut labore et dolore magna aliqua. Ut enim reprehenderit in voluptate velit esse...',
              'classes': ['e-doc', 'mb50'],
              'icon': 'ic-Generic_Document',
              'downloadLink': {
                'classes': ['btn', 'btn--ms', 'btn-download'],
                'href': '#',
                'title': 'Télécharger',
                'text': 'Télécharger'
              },
              'viewLink': {
                'classes': ['btn', 'btn--ms', 'btn-view'],
                'href': '#',
                'title': 'Visualiser',
                'text': 'Visualiser'
              }
            }
          ]
        },
      ]
    };

    this.infinitScroll = {
      'href': '#',
      'title': 'Charger plus de resultats',
      'text': 'Charger plus de resultats',
      'classes': ['btn', 'mrs', 'mob-mbs'],
      'icon': 'ic-Add'
    };

    this.anchors = {
      'suggestion': true,
      'like': true,
      'scripting': false,
      'process': false
    };

    this.anchorsList = {
      'suggestion': false,
      'like': false,
      'scripting': false,
      'process': false
    };

  }

  getTitle() {
    return this.edoc.title as string;
  }

  getEdoc() {
    return this.edoc;
  }
  
  getEdocDetails() {
    return this.edocDetails;
  }

  getInfinitScroll() {
    return this.infinitScroll;
  }
  
  getAnchorsState() {
    return this.anchors;
  }

  getAnchorsStateList() {
    return this.anchorsList;
  }
}
