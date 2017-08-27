import { Injectable } from '@angular/core';
import { Page } from '../../../../shared/_models/page.model';

@Injectable()
export class FavoritesService {

  favorites: Page;
  anchors: Object;


  constructor() {
    this.favorites = {
      'title': 'Favorites',
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
            'text': 'Favorites',
            'title': 'Favorites'
          },
        ]
      },
      'anchors': {
        'title': 'Liens interne',
        'links': [
          {'href': '#', 'title': 'lien', 'text': '1- Lorem ipsum dolor offers'},
          {'href': '#', 'title': 'lien', 'text': '2- Lorem ipsum dolor offers'},
          {'href': '#', 'title': 'lien', 'text': '3- Lorem ipsum dolor offers'},
          {'href': '#', 'title': 'lien', 'text': '4- Lorem ipsum dolor offers'}
        ]
      },
      'blocks': [
        {
          'type': 'favorites-item',
          'title': '',
          'classes': ['block','block-favorites'],
          'content': [
            {
              'title': 'Précisions',
              'html': '<p>This is Photoshop\'s version  of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit. Duis sed odio sit amet nibh vulputate cursus a sit amet mauris.</p>',
              'img': {
                'src': '',
                'alt': '',
                'title': ''
              },
              'cta': [
                {
                  'href': '#',
                  'title': 'Ouvrir la page',
                  'text': 'Ouvrir la page',
                  'class': ['btn', 'btn--important','mrs']
                },
                {
                  'href': '#',
                  'title': 'Supprimer le lien',
                  'text': 'Supprimer le lien',
                  'class': ['btn']
                }
              ]
            },
            {
              'title': 'Précisions',
              'html': '<p>This is Photoshop\'s version  of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit. Duis sed odio sit amet nibh vulputate cursus a sit amet mauris.</p>',
              'img': {
                'src': '',
                'alt': '',
                'title': ''
              },
              'cta': [
                {
                  'href': '#',
                  'title': 'Ouvrir la page',
                  'text': 'Ouvrir la page',
                  'class': ['btn', 'btn--important','mrs']
                },
                {
                  'href': '#',
                  'title': 'Supprimer le lien',
                  'text': 'Supprimer le lien',
                  'class': ['btn']
                }
              ]
            },
            {
              'title': 'Précisions',
              'html': '<p>This is Photoshop\'s version  of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit. Duis sed odio sit amet nibh vulputate cursus a sit amet mauris.</p>',
              'img': {
                'src': '',
                'alt': '',
                'title': ''
              },
              'cta': [
                {
                  'href': '#',
                  'title': 'Ouvrir la page',
                  'text': 'Ouvrir la page',
                  'class': ['btn', 'btn--important','mrs']
                },
                {
                  'href': '#',
                  'title': 'Supprimer le lien',
                  'text': 'Supprimer le lien',
                  'class': ['btn']
                }
              ]
            },
            {
              'title': 'Précisions',
              'html': '<p>This is Photoshop\'s version  of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit. Duis sed odio sit amet nibh vulputate cursus a sit amet mauris.</p>',
              'img': {
                'src': '',
                'alt': '',
                'title': ''
              },
              'cta': [
                {
                  'href': '#',
                  'title': 'Ouvrir la page',
                  'text': 'Ouvrir la page',
                  'class': ['btn', 'btn--important','mrs']
                },
                {
                  'href': '#',
                  'title': 'Supprimer le lien',
                  'text': 'Supprimer le lien',
                  'class': ['btn']
                }
              ]
            },
            {
              'title': 'Précisions',
              'html': '<p>This is Photoshop\'s version  of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit. Duis sed odio sit amet nibh vulputate cursus a sit amet mauris.</p>',
              'img': {
                'src': '',
                'alt': '',
                'title': ''
              },
              'cta': [
                {
                  'href': '#',
                  'title': 'Ouvrir la page',
                  'text': 'Ouvrir la page',
                  'class': ['btn', 'btn--important','mrs']
                },
                {
                  'href': '#',
                  'title': 'Supprimer le lien',
                  'text': 'Supprimer le lien',
                  'class': ['btn']
                }
              ]
            },
            {
              'title': 'Précisions',
              'html': '<p>This is Photoshop\'s version  of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit. Duis sed odio sit amet nibh vulputate cursus a sit amet mauris.</p>',
              'img': {
                'src': '',
                'alt': '',
                'title': ''
              },
              'cta': [
                {
                  'href': '#',
                  'title': 'Ouvrir la page',
                  'text': 'Ouvrir la page',
                  'class': ['btn', 'btn--important','mrs']
                },
                {
                  'href': '#',
                  'title': 'Supprimer le lien',
                  'text': 'Supprimer le lien',
                  'class': ['btn']
                }
              ]
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
  }

  getFavorites() {
    return this.favorites;
  }

  getAnchorsState() {
    return this.anchors;
  }
}

