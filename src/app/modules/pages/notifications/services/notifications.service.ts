import { Injectable } from '@angular/core';
import { Page } from '../../../../shared/_models/page.model';

@Injectable()
export class NotificationsService {

  notifications: Page;
  anchors: Object;
  anchorsList: Object;
  
  constructor() {
    this.notifications = {
      'title': 'Notifications',
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
            'text': 'Notifications',
            'title': 'Notifications'
          }
        ]
      },
      'anchors': {
        'title': 'Liens interne',
        'links': [
          {'href': '#', 'title': 'lien', 'text': '1- Lorem ipsum dolor notifications'},
          {'href': '#', 'title': 'lien', 'text': '2- Lorem ipsum dolor notifications'},
          {'href': '#', 'title': 'lien', 'text': '3- Lorem ipsum dolor notifications'},
          {'href': '#', 'title': 'lien', 'text': '4- Lorem ipsum dolor notifications'}
        ]
      },
      'blocks': [
        {
          'type': 'notifications',
          'title': 'Notifications',
          'classes': ['block', 'block-notifications'],
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

  getNotifications() {
    return this.notifications;
  }
  
  getAnchorsState() {
    return this.anchors;
  }
  
  getAnchorsStateList() {
    return this.anchorsList;
  }
  
}
