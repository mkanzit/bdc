import { Injectable } from '@angular/core';
import { Page } from '../../../../shared/_models/page.model';

@Injectable()
export class ProcessService {

  process: Page;
  processDetails: Page;
  anchors: Object;
  anchorsList: Object;

  constructor() {
    this.process = {
      'title': 'Liste des process',
      'description': '<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod.</p>',
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
            'text': 'Liste des process',
            'title': 'Liste des process'
          }
        ]
      },
      'anchors': {
        'title': 'Liens interne',
        'links': [
          { 'href': '#', 'title': 'lien', 'text': '1- Lorem ipsum dolor process' },
          { 'href': '#', 'title': 'lien', 'text': '2- Lorem ipsum dolor process' },
          { 'href': '#', 'title': 'lien', 'text': '3- Lorem ipsum dolor process' },
          { 'href': '#', 'title': 'lien', 'text': '4- Lorem ipsum dolor process' }
        ]
      },
      'blocks': [
        {
          'type': 'process',
          'title': 'Processes',
          'classes': ['block', 'block-process'],
          'content': [
            {
              'id': 1,
              'title': 'Lorem ipsum',
              'html': `<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod.          </p>`,
              'link': {
                'href': '#',
                'title': 'En savoir plus',
                'text': 'En savoir plus'
              },
              'details': {
                'title': 'Lorem ipsum details 1',
                'html': `<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod.          </p>`,
                'detail_desc': [
                  {
                    'id': 1,
                    'title': '1 - Lorem ipsum dolor sit amet, consectetur adipiscing elit',
                    'html': '<p> A - tempor incididunt ut labore et dolore magna aliqua. Ut enim ad magna aliqua. quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute or in reprehenderit in voluptate velit esse...</p><p>B - tempor incididunt ut labore et dolore magna aliqua. Ut enim ad magna aliqua. quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute or in reprehenderit in voluptate velit esse...</p><p>C - tempor incididunt ut labore et dolore magna aliqua. Ut enim ad magna aliqua. quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute or in reprehenderit in voluptate velit esse...</p>',
                    'img': {
                      'src': 'assets/imgs/contenus/visuel-54.jpg',
                      'alt': 'Details',
                      'text': 'Details',
                    },
                  },
                  {
                    'id': 2,
                    'title': '2 - Lorem ipsum dolor sit amet, consectetur adipiscing elit',
                    'html': '<p> A - tempor incididunt ut labore et dolore magna aliqua. Ut enim ad magna aliqua. quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute or in reprehenderit in voluptate velit esse...</p><p>B - tempor incididunt ut labore et dolore magna aliqua. Ut enim ad magna aliqua. quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute or in reprehenderit in voluptate velit esse...</p><p>C - tempor incididunt ut labore et dolore magna aliqua. Ut enim ad magna aliqua. quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute or in reprehenderit in voluptate velit esse...</p>',
                    'img': {
                      'src': 'assets/imgs/contenus/visuel-54.jpg',
                      'alt': 'Details',
                      'text': 'Details',
                    },
                  },
                  {
                    'id': 3,
                    'title': '3 - Lorem ipsum dolor sit amet, consectetur adipiscing elit',
                    'html': '<p> A - tempor incididunt ut labore et dolore magna aliqua. Ut enim ad magna aliqua. quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute or in reprehenderit in voluptate velit esse...</p><p>B - tempor incididunt ut labore et dolore magna aliqua. Ut enim ad magna aliqua. quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute or in reprehenderit in voluptate velit esse...</p><p>C - tempor incididunt ut labore et dolore magna aliqua. Ut enim ad magna aliqua. quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute or in reprehenderit in voluptate velit esse...</p>',
                    'img': {
                      'src': 'assets/imgs/contenus/visuel-54.jpg',
                      'alt': 'Details',
                      'text': 'Details',
                    },
                  },
                ]
              }
            },
            {
              'id': 2,
              'title': 'Lorem ipsum',
              'html': `<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod.          </p>`,
              'link': {
                'href': '#',
                'title': 'En savoir plus',
                'text': 'En savoir plus'
              },
              'details': {
                'title': 'Lorem ipsum details 2',
                'html': `<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod.          </p>`,
                'detail_desc': [
                  {
                    'id': 1,
                    'title': '1 - Lorem ipsum dolor sit amet, consectetur adipiscing elit',
                    'html': '<p> A - tempor incididunt ut labore et dolore magna aliqua. Ut enim ad magna aliqua. quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute or in reprehenderit in voluptate velit esse...</p><p>B - tempor incididunt ut labore et dolore magna aliqua. Ut enim ad magna aliqua. quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute or in reprehenderit in voluptate velit esse...</p><p>C - tempor incididunt ut labore et dolore magna aliqua. Ut enim ad magna aliqua. quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute or in reprehenderit in voluptate velit esse...</p>',
                    'img': {
                      'src': 'assets/imgs/contenus/visuel-54.jpg',
                      'alt': 'Details',
                      'text': 'Details',
                    },
                  },
                  {
                    'id': 2,
                    'title': '2 - Lorem ipsum dolor sit amet, consectetur adipiscing elit',
                    'html': '<p> A - tempor incididunt ut labore et dolore magna aliqua. Ut enim ad magna aliqua. quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute or in reprehenderit in voluptate velit esse...</p><p>B - tempor incididunt ut labore et dolore magna aliqua. Ut enim ad magna aliqua. quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute or in reprehenderit in voluptate velit esse...</p><p>C - tempor incididunt ut labore et dolore magna aliqua. Ut enim ad magna aliqua. quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute or in reprehenderit in voluptate velit esse...</p>',
                    'img': {
                      'src': 'assets/imgs/contenus/visuel-54.jpg',
                      'alt': 'Details',
                      'text': 'Details',
                    },
                  },
                  {
                    'id': 3,
                    'title': '3 - Lorem ipsum dolor sit amet, consectetur adipiscing elit',
                    'html': '<p> A - tempor incididunt ut labore et dolore magna aliqua. Ut enim ad magna aliqua. quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute or in reprehenderit in voluptate velit esse...</p><p>B - tempor incididunt ut labore et dolore magna aliqua. Ut enim ad magna aliqua. quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute or in reprehenderit in voluptate velit esse...</p><p>C - tempor incididunt ut labore et dolore magna aliqua. Ut enim ad magna aliqua. quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute or in reprehenderit in voluptate velit esse...</p>',
                    'img': {
                      'src': 'assets/imgs/contenus/visuel-54.jpg',
                      'alt': 'Details',
                      'text': 'Details',
                    },
                  },
                ]
              }
            },
            {
              'id': 3,
              'title': 'Lorem ipsum',
              'html': `<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod.          </p>`,
              'link': {
                'href': '#',
                'title': 'En savoir plus',
                'text': 'En savoir plus'
              },
              'details': {
                'title': 'Lorem ipsum details 3',
                'html': `<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod.          </p>`,
                'detail_desc': [
                  {
                    'id': 1,
                    'title': '1 - Lorem ipsum dolor sit amet, consectetur adipiscing elit',
                    'html': '<p> A - tempor incididunt ut labore et dolore magna aliqua. Ut enim ad magna aliqua. quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute or in reprehenderit in voluptate velit esse...</p><p>B - tempor incididunt ut labore et dolore magna aliqua. Ut enim ad magna aliqua. quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute or in reprehenderit in voluptate velit esse...</p><p>C - tempor incididunt ut labore et dolore magna aliqua. Ut enim ad magna aliqua. quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute or in reprehenderit in voluptate velit esse...</p>',
                    'img': {
                      'src': 'assets/imgs/contenus/visuel-54.jpg',
                      'alt': 'Details',
                      'text': 'Details',
                    },
                  },
                  {
                    'id': 2,
                    'title': '2 - Lorem ipsum dolor sit amet, consectetur adipiscing elit',
                    'html': '<p> A - tempor incididunt ut labore et dolore magna aliqua. Ut enim ad magna aliqua. quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute or in reprehenderit in voluptate velit esse...</p><p>B - tempor incididunt ut labore et dolore magna aliqua. Ut enim ad magna aliqua. quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute or in reprehenderit in voluptate velit esse...</p><p>C - tempor incididunt ut labore et dolore magna aliqua. Ut enim ad magna aliqua. quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute or in reprehenderit in voluptate velit esse...</p>',
                    'img': {
                      'src': 'assets/imgs/contenus/visuel-54.jpg',
                      'alt': 'Details',
                      'text': 'Details',
                    },
                  },
                  {
                    'id': 3,
                    'title': '3 - Lorem ipsum dolor sit amet, consectetur adipiscing elit',
                    'html': '<p> A - tempor incididunt ut labore et dolore magna aliqua. Ut enim ad magna aliqua. quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute or in reprehenderit in voluptate velit esse...</p><p>B - tempor incididunt ut labore et dolore magna aliqua. Ut enim ad magna aliqua. quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute or in reprehenderit in voluptate velit esse...</p><p>C - tempor incididunt ut labore et dolore magna aliqua. Ut enim ad magna aliqua. quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute or in reprehenderit in voluptate velit esse...</p>',
                    'img': {
                      'src': 'assets/imgs/contenus/visuel-54.jpg',
                      'alt': 'Details',
                      'text': 'Details',
                    },
                  },
                ]
              },
            }
          ]
        }
      ]
    };

    this.processDetails = {
      'title': 'Details process',
      'description': '<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod.</p>',
      'image': {
        'src': '',
        'alt': '',
        'title': ''
      },
      'breadcrumb': {
        'blocktype': 'breadcrumb',
        'blockdata': [
          {
            'href': '/process',
            'text': 'Liste des process',
            'title': 'Liste des process'
          },
          {
            'href': '',
            'text': 'détail process',
            'title': 'détail process'
          }
        ]
      },
      'anchors': {
        'title': 'Liens interne',
        'links': [
          { 'href': '#item-1', 'title': 'lien', 'text': '1- Lorem ipsum dolor process' },
          { 'href': '#item-2', 'title': 'lien', 'text': '2- Lorem ipsum dolor process' },
          { 'href': '#item-3', 'title': 'lien', 'text': '3- Lorem ipsum dolor process' },
        ]
      },
      'blocks': [
        {
          'type': 'process-details',
          'title': 'Process détails',
          'classes': ['block', 'block-process'],
          'content': [
              {
                'title': 'Lorem ipsum details 1',
                'html': `<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod.          </p>`,
                'detail_desc': [
                  {
                    'id': 1,
                    'title': '1 - Lorem ipsum dolor sit amet, consectetur adipiscing elit',
                    'html': '<p> A - tempor incididunt ut labore et dolore magna aliqua. Ut enim ad magna aliqua. quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute or in reprehenderit in voluptate velit esse...</p><p>B - tempor incididunt ut labore et dolore magna aliqua. Ut enim ad magna aliqua. quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute or in reprehenderit in voluptate velit esse...</p><p>C - tempor incididunt ut labore et dolore magna aliqua. Ut enim ad magna aliqua. quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute or in reprehenderit in voluptate velit esse...</p>',
                    'img': {
                      'src': 'assets/imgs/contenus/visuel-54.jpg',
                      'alt': 'Details',
                      'text': 'Details',
                    },
                  },
                  {
                    'id': 2,
                    'title': '2 - Lorem ipsum dolor sit amet, consectetur adipiscing elit',
                    'html': '<p> A - tempor incididunt ut labore et dolore magna aliqua. Ut enim ad magna aliqua. quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute or in reprehenderit in voluptate velit esse...</p><p>B - tempor incididunt ut labore et dolore magna aliqua. Ut enim ad magna aliqua. quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute or in reprehenderit in voluptate velit esse...</p><p>C - tempor incididunt ut labore et dolore magna aliqua. Ut enim ad magna aliqua. quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute or in reprehenderit in voluptate velit esse...</p>',
                    'img': {
                      'src': 'assets/imgs/contenus/visuel-54.jpg',
                      'alt': 'Details',
                      'text': 'Details',
                    },
                  },
                  {
                    'id': 3,
                    'title': '3 - Lorem ipsum dolor sit amet, consectetur adipiscing elit',
                    'html': '<p> A - tempor incididunt ut labore et dolore magna aliqua. Ut enim ad magna aliqua. quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute or in reprehenderit in voluptate velit esse...</p><p>B - tempor incididunt ut labore et dolore magna aliqua. Ut enim ad magna aliqua. quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute or in reprehenderit in voluptate velit esse...</p><p>C - tempor incididunt ut labore et dolore magna aliqua. Ut enim ad magna aliqua. quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute or in reprehenderit in voluptate velit esse...</p>',
                    'img': {
                      'src': 'assets/imgs/contenus/visuel-54.jpg',
                      'alt': 'Details',
                      'text': 'Details',
                    },
                  },
                ]
              }
          ]
        }
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

  getProcess() {
    return this.process;
  }

  getProcessDetails() {
    return this.processDetails;
  }

  getAnchorsState() {
    return this.anchors;
  }

  getAnchorsStateList() {
    return this.anchorsList;
  }

}
