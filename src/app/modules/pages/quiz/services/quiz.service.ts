import { Injectable } from '@angular/core';
import { Page } from '../../../../shared/_models/page.model';

@Injectable()
export class QuizService {

  quiz: Page;
  quizScore: Page;
  quizStart: Page;
  quizTest: Page;

  constructor() {
    this.quiz = {
      'title': 'Quiz',
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
            'text': 'Quiz',
            'title': 'Quiz'
          }
        ]
      },
      'anchors': {
        'title': 'Liens interne',
        'links': [
          { 'href': '#', 'title': 'lien', 'text': '1- Lorem ipsum dolor pdv' },
          { 'href': '#', 'title': 'lien', 'text': '2- Lorem ipsum dolor pdv' },
          { 'href': '#', 'title': 'lien', 'text': '3- Lorem ipsum dolor pdv' },
          { 'href': '#', 'title': 'lien', 'text': '4- Lorem ipsum dolor pdv' }
        ]
      },
      'blocks': [
        {
          'type': 'quizes',
          'classes': ['block', 'block-quiz'],
          'title': '',
          'content': []
        }
      ]
    };

    this.quizStart = {
      'title': 'Quiz',
      'description': `<p class="mbm">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt, praesentium. In, ullam! Voluptates beatae eos veritatis recusandae cumque, praesentium sed aliquid corporis laborum obcaecati distinctio eveniet similique mollitia, soluta dolorum.</p>  <p class="mbm">Vous avez 10 min pour passer le Quiz. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab, vel!</p>  <p class="mbm">Créer par l'équipe B2C - Lorem ... le 16 Avril 2017</p>`,
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
            'text': 'Quiz',
            'title': 'Quiz'
          }
        ]
      },
      'anchors': {
        'title': 'Liens interne',
        'links': [
          { 'href': '#', 'title': 'lien', 'text': '1- Lorem ipsum dolor pdv' },
          { 'href': '#', 'title': 'lien', 'text': '2- Lorem ipsum dolor pdv' },
          { 'href': '#', 'title': 'lien', 'text': '3- Lorem ipsum dolor pdv' },
          { 'href': '#', 'title': 'lien', 'text': '4- Lorem ipsum dolor pdv' }
        ]
      },
      'blocks': [
        {
          'type': 'quiz-start',
          'classes': ['block', 'block-quiz-start'],
          'title': '',
          'content': [
            {
              'id': 1,
              'title': 'région',
              'label': 'Selectionner une région',
              'regions': [
                'Région 1',
                'Région 2',
                'Région 3',
              ],
              'button': {
                'href': '',
                'classes': ['btn', 'btn--important'],
                'type': 'submit',
                'text': 'Commencer'
              }
            }
          ]
        }
      ]
    };

    this.quizScore = {
      'title': 'Quiz - Session 2',
      'description': `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt, praesentium. In, ullam! Voluptates beatae eos veritatis recusandae cumque, praesentium sed aliquid corporis laborum obcaecati distinctio eveniet similique mollitia, soluta dolorum.`,
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
            'text': 'Quiz',
            'title': 'Quiz'
          }
        ]
      },
      'anchors': {
        'title': 'Liens interne',
        'links': [
          { 'href': '#', 'title': 'lien', 'text': '1- Lorem ipsum dolor pdv' },
          { 'href': '#', 'title': 'lien', 'text': '2- Lorem ipsum dolor pdv' },
          { 'href': '#', 'title': 'lien', 'text': '3- Lorem ipsum dolor pdv' },
          { 'href': '#', 'title': 'lien', 'text': '4- Lorem ipsum dolor pdv' }
        ]
      },
      'blocks': [
        {
          'type': 'onlineediteur',
          'classes': ['block', 'block-quiz-start'],
          'title': '',
          'content': [
            {
              'id': 1,
              'title': 'Bravo !',
              'html': `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus tempore ducimus hic, omnis voluptates. At optio maxime iste omnis culpa sed voluptatibus molestias laborum eligendi suscipit. Unde, fuga sapiente temporibus soluta tempora necessitatibus repellendus, in, odio sunt, distinctio reprehenderit aliquam.`,
              'link': {
                'href': '/home',
                'classes': ['btn', 'mrs', 'mob-mbs'],
                'text': 'Retour à la page d\'accueil',
                'title': 'Retour à la page d\'accueil'
              },
              'progress': {
                'visible': true,
                'percent': 70,
                'boxSize': 195,
                'radius': 97,
                'lowColor': 'red',
                'middleColor': 'orange',
                'interColor': '#f1c40f',
                'highColor': '#16a085',
                'border': 34,
                'time': 3,
                'fontFamily': 'Arial',
                'fontSize': 26,
                'backgroundColor': '#eee'
              }
            }
          ]
        }
      ]
    };

    this.quizTest = {
      'title': 'Quiz - Session 2',
      'description': `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt, praesentium. In, ullam! Voluptates beatae eos veritatis recusandae cumque, praesentium sed aliquid corporis laborum obcaecati distinctio eveniet similique mollitia, soluta dolorum.`,
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
            'text': 'Quiz',
            'title': 'Quiz'
          }
        ]
      },
      'anchors': {
        'title': 'Liens interne',
        'links': [
          { 'href': '#', 'title': 'lien', 'text': '1- Lorem ipsum dolor pdv' },
          { 'href': '#', 'title': 'lien', 'text': '2- Lorem ipsum dolor pdv' },
          { 'href': '#', 'title': 'lien', 'text': '3- Lorem ipsum dolor pdv' },
          { 'href': '#', 'title': 'lien', 'text': '4- Lorem ipsum dolor pdv' }
        ]
      },
      'blocks': [
        {
          'type': 'onlineediteur',
          'classes': ['block', 'block-quiz-test'],
          'title': '',
          'content': [
            {
              'progress': {
                'visible': true,
                'percent': 40,
                'boxSize': 195,
                'radius': 63,
                'lowColor': 'red',
                'middleColor': 'orange',
                'interColor': '#f1c40f',
                'highColor': '#16a085',
                'border': 17,
                'time': 3,
                'fontFamily': 'Arial',
                'fontSize': 22,
                'backgroundColor': '#eee'
              },
              'button': {
                'href': '',
                'classes': ['btn', 'btn--important'],
                'type': 'submit',
                'text': 'Commencer'
              },
              'tests': [
                {
                  'tid': 1,
                  'title': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error, eligendi.',
                  'classes': ['item-form'],
                  'champs': [
                    {
                      'cid': 1,
                      'classes': ['form-type-checkbox', 'mrl', 'w96'],
                      'type': 'checkbox',
                      'name': 'q',
                      'checked': true,
                      'label': 'Choix 1'
                    },
                    {
                      'cid': 2,
                      'classes': ['form-type-checkbox', 'mrl', 'w96'],
                      'type': 'checkbox',
                      'name': 'q',
                      'checked': false,
                      'label': 'Choix 2'
                    },
                    {
                      'cid': 3,
                      'classes': ['form-type-checkbox', 'mrl', 'w96'],
                      'type': 'checkbox',
                      'name': 'q',
                      'checked': false,
                      'label': 'Choix 3'
                    }
                  ]
                },
                {
                  'tid': 2,
                  'title': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error, eligendi.',
                  'classes': ['item-form'],
                  'champs': [
                    {
                      'cid': 1,
                      'classes': ['form-type-checkbox', 'mrl', 'w96'],
                      'type': 'checkbox',
                      'name': 'q',
                      'checked': false,
                      'label': 'Choix 1'
                    },
                    {
                      'cid': 2,
                      'classes': ['form-type-checkbox', 'mrl', 'w96'],
                      'type': 'checkbox',
                      'name': 'q',
                      'checked': true,
                      'label': 'Choix 2'
                    },
                    {
                      'cid': 3,
                      'classes': ['form-type-checkbox', 'mrl', 'w96'],
                      'type': 'checkbox',
                      'name': 'q',
                      'checked': false,
                      'label': 'Choix 3'
                    }
                  ]
                },
                {
                  'tid': 3,
                  'title': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error, eligendi.',
                  'classes': ['item-form'],
                  'champs': [
                    {
                      'cid': 1,
                      'classes': ['form-type-checkbox', 'mrl', 'w96'],
                      'type': 'checkbox',
                      'name': 'q',
                      'checked': true,
                      'label': 'Choix 1'
                    },
                    {
                      'cid': 2,
                      'classes': ['form-type-checkbox', 'mrl', 'w96'],
                      'type': 'checkbox',
                      'name': 'q',
                      'checked': false,
                      'label': 'Choix 2'
                    },
                    {
                      'cid': 3,
                      'classes': ['form-type-checkbox', 'mrl', 'w96'],
                      'type': 'checkbox',
                      'name': 'q',
                      'checked': true,
                      'label': 'Choix 3'
                    }
                  ]
                },
                {
                  'tid': 4,
                  'title': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error, eligendi.',
                  'classes': ['item-form'],
                  'champs': [
                    {
                      'cid': 1,
                      'classes': ['form-type-checkbox', 'mrl', 'w96'],
                      'type': 'checkbox',
                      'name': 'q',
                      'checked': false,
                      'label': 'Choix 1'
                    },
                    {
                      'cid': 2,
                      'classes': ['form-type-checkbox', 'mrl', 'w96'],
                      'type': 'checkbox',
                      'name': 'q',
                      'checked': true,
                      'label': 'Choix 2'
                    },
                    {
                      'cid': 3,
                      'classes': ['form-type-checkbox', 'mrl', 'w96'],
                      'type': 'checkbox',
                      'name': 'q',
                      'checked': false,
                      'label': 'Choix 3'
                    }
                  ]
                },
                {
                  'tid': 4,
                  'title': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error, eligendi.',
                  'classes': ['item-form'],
                  'champs': [
                    {
                      'cid': 1,
                      'classes': ['form-type-checkbox', 'mrl', 'w96'],
                      'type': 'checkbox',
                      'name': 'q',
                      'checked': false,
                      'label': 'Choix 1'
                    },
                    {
                      'cid': 2,
                      'classes': ['form-type-checkbox', 'mrl', 'w96'],
                      'type': 'checkbox',
                      'name': 'q',
                      'checked': false,
                      'label': 'Choix 2'
                    },
                    {
                      'cid': 3,
                      'classes': ['form-type-checkbox', 'mrl', 'w96'],
                      'type': 'checkbox',
                      'name': 'q',
                      'checked': true,
                      'label': 'Choix 3'
                    }
                  ]
                },
                {
                  'tid': 5,
                  'title': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error, eligendi.',
                  'classes': ['item-form'],
                  'champs': [
                    {
                      'cid': 1,
                      'classes': ['form-type-checkbox', 'mrl', 'w96'],
                      'type': 'checkbox',
                      'name': 'q',
                      'checked': true,
                      'label': 'Choix 1'
                    },
                    {
                      'cid': 2,
                      'classes': ['form-type-checkbox', 'mrl', 'w96'],
                      'type': 'checkbox',
                      'name': 'q',
                      'checked': false,
                      'label': 'Choix 2'
                    },
                    {
                      'cid': 3,
                      'classes': ['form-type-checkbox', 'mrl', 'w96'],
                      'type': 'checkbox',
                      'name': 'q',
                      'checked': false,
                      'label': 'Choix 3'
                    }
                  ]
                }
              ]
            }
          ]
        }
      ]
    };
  }

  getTitle() {
    return this.quiz.title;
  }

  getQuiz() {
    return this.quiz;
  }

  getQuizStart() {
    return this.quizStart;
  }

  getQuizScore() {
    return this.quizScore;
  }

  getQuizTest() {
    return this.quizTest;
  }

}
