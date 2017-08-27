import { Injectable } from '@angular/core';
import { Page } from '../../../../shared/_models/page.model';

@Injectable()
export class ScriptingService {

  scripts: Page;
  anchors: Object;

  constructor() {
    this.scripts = {
      'title': 'Scripting',
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
            'text': 'Scripting',
            'title': 'Scripting'
          }
        ]
      },
      'anchors': {
        'title': 'Liens interne',
        'links': [
          {'href': '#', 'title': 'lien', 'text': '1- Lorem ipsum dolor script'},
          {'href': '#', 'title': 'lien', 'text': '2- Lorem ipsum dolor script'},
          {'href': '#', 'title': 'lien', 'text': '3- Lorem ipsum dolor script'},
          {'href': '#', 'title': 'lien', 'text': '4- Lorem ipsum dolor script'}
        ]
      },
      'blocks': [
        {
          'type': 'text-simple-illustration',
          'classes': ['block', 'block-simple-text-illustration', 'block-bg-stand', 'bg-pink', 'color-black'],
          'title': '',
          'content': [
            {
              'title': 'Script reinitialisation lorem',
              'html': '<p>This is Photoshop\'s version  of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit. Duis sed odio sit amet nibh vulputate cursus a sit amet mauris.</p>',
              'img': {
                'src': '',
                'alt': '',
                'title': ''
              },
              'cta': []
            }
          ]
        },
      ]
    };

    this.anchors = {
      'suggestion': true,
      'like': true,
      'scripting': true,
      'process': true
    };
  }

  getScripts() {
    return this.scripts;
  }
  
  getAnchorsState() {
    return this.anchors;
  }

}
