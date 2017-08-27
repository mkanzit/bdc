import { Injectable } from '@angular/core';
import { Page } from '../../../../shared/_models/page.model';

@Injectable()
export class HomeService {

  home: Page;

  constructor() {
    this.home = {
      'title': 'Accueil',
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
            'href': '/home',
            'text': 'link1',
            'title': 'link1'
          },
          {
            'href': '/offers',
            'text': 'link2',
            'title': 'link2'
          },
          {
            'href': '/news',
            'text': 'link3',
            'title': 'link3'
          }
        ]
      },
      'anchors': {
        'title': '',
        'links': []
      },
      'blocks': [
        {
          'type': 'text-simple-illustration',
          'classes': ['block', 'block-quiz', 'block-bg-stand', 'bg-pink'],
          'title': '',
          'content': [
            {
              'title': 'Quiz',
              'html': '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet.',
              'img': {
                'src': 'assets/imgs/contenus/visuel-25-small.png',
                'alt': 'Quiz',
                'title': 'Quiz'
              },
              'cta': []
            }
          ]
        },
      ]
    }
  }

  getHome() {
    return this.home;
  }

}
