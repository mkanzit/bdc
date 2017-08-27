import { Injectable } from '@angular/core';
import { Page } from '../../../../shared/_models/page.model';

@Injectable()
export class FaqService {

  faq: Page;
  anchors: Object;


  constructor() {
    this.faq = {
      'title': 'FAQ',
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
            'text': 'FAQ',
            'title': 'FAQ'
          },
        ]
      },
      'anchors': {
        'title': 'Liens interne',
        'links': []
      },
      'blocks': [
        {
          'type': 'FAQ',
          'title': 'FAQ',
          'classes': ['block', 'block-histoire', 'block-faq'],
          'content': [
            {
              'title': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit euismod bibendum laoreet ?',
              'html': '<ul> <li>et dolore magna aliqua. Ut </li> <li>ion ullamco labo</li> <li>ation ullamco l</li> <li>iat nulla pariatur. Exce</li> </ul> <img src="assets/imgs/contenus/img2.png" alt=""> <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>',
              'gamme': 'mobile',
              'offre': 'offre1'
            },
            {
              'title': 'Consectetur adipiscing elit euismod bibendum laoreet ?',
              'html': '<ul> <li>et dolore magna aliqua. Ut </li> <li>ion ullamco labo</li> <li>ation ullamco l</li> <li>iat nulla pariatur. Exce</li> </ul> <img src="assets/imgs/contenus/img2.png" alt=""> <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>',
              'gamme': 'mobile',
              'offre': 'offre2'
            },
            {
              'title': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit euismod bibendum laoreet ?',
              'html': '<ul> <li>et dolore magna aliqua. Ut </li> <li>ion ullamco labo</li> <li>ation ullamco l</li> <li>iat nulla pariatur. Exce</li> </ul> <img src="assets/imgs/contenus/img2.png" alt=""> <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>',
              'gamme': 'internet',
              'offre': 'offre1'
            },
            {
              'title': 'Consectetur adipiscing elit euismod bibendum ?',
              'html': '<ul> <li>et dolore magna aliqua. Ut </li> <li>ion ullamco labo</li> <li>ation ullamco l</li> <li>iat nulla pariatur. Exce</li> </ul> <img src="assets/imgs/contenus/img2.png" alt=""> <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>',
              'gamme': 'internet',
              'offre': 'offre3'
            },
            {
              'title': 'Consectetur adipiscing elit euismod bibendum laoreet ?',
              'html': '<ul> <li>et dolore magna aliqua. Ut </li> <li>ion ullamco labo</li> <li>ation ullamco l</li> <li>iat nulla pariatur. Exce</li> </ul> <img src="assets/imgs/contenus/img2.png" alt=""> <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>',
              'gamme': 'fixe',
              'offre': 'offre1'
            },
            {
              'title': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit euismod dolor sien de testanig bibendum adipiscing elit euismod sdipiscing elit euismod laoreet ?',
              'html': '<img class="fl" src="assets/imgs/contenus/img3.png" alt=""><p>This is Photoshop\'s version  of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit. Duis sed odio sit amet nibh vulputate cursus a sit amet mauris. Morbi accumsan ipsum velit. </p>',
              'gamme': 'fixe',
              'offre': 'offre2'
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

  getFaq() {
    return this.faq;
  }

  getTopFAQ(length: number) {
    return this.faq.blocks[0].content.splice(0, length);
  }

  getAnchorsState() {
    return this.anchors;
  }
}
