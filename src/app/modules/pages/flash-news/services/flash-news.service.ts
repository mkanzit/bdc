import { Injectable } from '@angular/core';
import { Page } from '../../../../shared/_models/page.model';

@Injectable()
export class FlashNewsService {

  flashNews: Page;
  anchors: Object;
  anchorsList: Object;
  
  constructor() {
    this.flashNews = {
      'title': 'Flash news',
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
            'text': 'Flash news',
            'title': 'Flash news'
          }
        ]
      },
      'anchors': {
        'title': 'Liens interne',
        'links': []
      },
      'blocks': [
        {
          'type': 'flashNews',
          'title': 'Flash news',
          'classes': ['block', 'block-flashNews'],
          'content': [
            {
              'vid': {
                'src': 'assets/imgs/contenus/news.png',
                'title': 'news',
                'alt': 'news'
              },
              'title': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod.',
              'html': '<p>tempor incididunt ut labore et dolore magna aliqua. Ut enim ad magna aliqua. Ut minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute lor in reprehenderit in voluptate velitesse...</p>',
              'link': {
                'href': '/detail',
                'title': 'En savoir plus',
                'text': 'En savoir plus'
              }
            },
            {
              'vid': {
                'src': 'assets/imgs/contenus/news.png',
                'title': 'news',
                'alt': 'news'
              },
              'title': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod.',
              'html': '<p>tempor incididunt ut labore et dolore magna aliqua. Ut enim ad magna aliqua. Ut minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute lor in reprehenderit in voluptate velitesse...</p>',
              'link': {
                'href': '/detail',
                'title': 'En savoir plus',
                'text': 'En savoir plus'
              }
            },
            {
              'vid': {
                'src': 'assets/imgs/contenus/news.png',
                'title': 'news',
                'alt': 'news'
              },
              'title': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod.',
              'html': '<p>tempor incididunt ut labore et dolore magna aliqua. Ut enim ad magna aliqua. Ut minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute lor in reprehenderit in voluptate velitesse...</p>',
              'link': {
                'href': '/detail',
                'title': 'En savoir plus',
                'text': 'En savoir plus'
              }
            },
            {
              'vid': {
                'src': 'assets/imgs/contenus/news.png',
                'title': 'news',
                'alt': 'news'
              },
              'title': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod.',
              'html': '<p>tempor incididunt ut labore et dolore magna aliqua. Ut enim ad magna aliqua. Ut minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute lor in reprehenderit in voluptate velitesse...</p>',
              'link': {
                'href': '/detail',
                'title': 'En savoir plus',
                'text': 'En savoir plus'
              }
            },
            {
              'vid': {
                'src': 'assets/imgs/contenus/news.png',
                'title': 'news',
                'alt': 'news'
              },
              'title': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod.',
              'html': '<p>tempor incididunt ut labore et dolore magna aliqua. Ut enim ad magna aliqua. Ut minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute lor in reprehenderit in voluptate velitesse...</p>',
              'link': {
                'href': '/detail',
                'title': 'En savoir plus',
                'text': 'En savoir plus'
              }
            },
            {
              'vid': {
                'src': 'assets/imgs/contenus/news.png',
                'title': 'news',
                'alt': 'news'
              },
              'title': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod.',
              'html': '<p>tempor incididunt ut labore et dolore magna aliqua. Ut enim ad magna aliqua. Ut minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute lor in reprehenderit in voluptate velitesse...</p>',
              'link': {
                'href': '/detail',
                'title': 'En savoir plus',
                'text': 'En savoir plus'
              }
            },
            {
              'vid': {
                'src': 'assets/imgs/contenus/pdf.png',
                'title': 'news',
                'alt': 'news'
              },
              'title': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod.',
              'html': '<p>tempor incididunt ut labore et dolore magna aliqua. Ut enim ad magna aliqua. Ut minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute lor in reprehenderit in voluptate velitesse...</p>',
              'link': {
                'href': '/detail',
                'title': 'En savoir plus',
                'text': 'En savoir plus'
              }
            },
          ]
        },
      ]
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

  getFlashNews() {
    return this.flashNews;
  }

  getAnchorsState() {
    return this.anchors;
  }

  getAnchorsStateList() {
    return this.anchorsList;
  }
}
