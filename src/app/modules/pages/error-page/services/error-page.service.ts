import { Injectable } from '@angular/core';
import { Page } from '../../../../shared/_models/page.model';

@Injectable()
export class ErrorPageService {

  errorPage: Page;

  constructor() {
    this.errorPage = {
      'title': 'Error page',
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
            'href': '/error-page',
            'text': 'Error page',
            'title': 'Error page'
          }
        ]
      },
      'anchors': {
        'title': 'Liens interne',
        'links': []
      },
      'blocks': [
        {
          'type': 'text-simple-illustration',
          'classes': ['block', 'block-error', 'block-bg-stand', 'bg-yellow'],
          'title': '',
          'content': [
            {
              'title': 'Désolé, cette page ne peut pas être trouvée. Erreur 404.',
              'html': '<p>La page que vous recherchez a été déplacé, remplacé ou est pas disponible actuellement.</p>',
              'img': {
                'src': '../assets/imgs/contenus/visuel-1.png',
                'alt': 'Not Found',
                'title': 'Not Found'
              },
              'cta': []
            }
          ]
        },
      ]
    }
  }

  getErrorPage() {
    return this.errorPage;
  }

}
