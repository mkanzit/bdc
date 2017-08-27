import { Injectable } from '@angular/core';
import { Page } from '../../../../shared/_models/page.model';

@Injectable()
export class RoamingService {

  roaming: Page;
  anchors: Object;

  constructor() {
    this.roaming = {
      'title': 'Roaming',
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
            'text': 'Roaming',
            'title': 'Roaming'
          }
        ]
      },
      'anchors': {
        'title': 'Liens interne',
        'links': [
          {'href': '#', 'title': 'lien', 'text': '1- Lorem ipsum dolor Roaming'},
          {'href': '#', 'title': 'lien', 'text': '2- Lorem ipsum dolor Roaming'},
          {'href': '#', 'title': 'lien', 'text': '3- Lorem ipsum dolor Roaming'},
          {'href': '#', 'title': 'lien', 'text': '4- Lorem ipsum dolor Roaming'}
        ]
      },
      'blocks': [
        {
          'type': 'faq',
          'title': '',
          'classes': ['block', 'block-histoire', 'block-faq'],
          'content': [
            {
              'title': 'Liste des pays où les Pass Roaming Appels et Internet sont valables :',
              'html': '<p>France, Espagne, Italie, Belgique, USA, Canada, Allemagne, Grande Bretagne, Turquie, Luxembourg, Moldavie, Pologne, Romanie, Slovaquie, Maurice, Réunion, Vatican, Portugal, Suisse, Grèce, Autriche, Malte, Irlande, Suède, Norvège, Tchèque, Hollande, Russie, Albanie ,Arménie Croatie, Malte, Hongrie, Arabie Saoudite, Emirats Arabes Unis, Koweït, Bahreïn, Guadeloupe, Saint-Barthélemy, Martinique, Saint-Martin, Dominique, Guyane Française.</p>'
            },
            {
              'title': 'Comment activer les Pass Roaming Orange ?',
              'html': '<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum modi minima aperiam, saepe. Nulla corporis itaque iure repellendus, quisquam, minima, consequatur praesentium dolorum rerum laudantium porro numquam perspiciatis dolorem enim?</p>'
            },
            {
              'title': 'Comment consulter le solde des Pass Roaming Orange ?',
              'html': '<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum modi minima aperiam, saepe. Nulla corporis itaque iure repellendus, quisquam, minima, consequatur praesentium dolorum rerum laudantium porro numquam perspiciatis dolorem enim?</p>'
            },
          ]
        },
        {
          'type': 'faq',
          'title': 'Des formules Roaming en fonction de vos besoins',
          'classes': ['block', 'block-histoire', 'block-faq'],
          'content': [
            {
              'title': 'Roaming ouvert',
              'html': '<p>Cette formule vous permet d’émettre et recevoir vos appels/SMS depuis l’étranger à votre convenance en dehors de votre forfait, votre consommation est reportée en supplément sur votre facture.</p>'
            },
            {
              'title': 'Roaming maitrisé',
              'html': '<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum modi minima aperiam, saepe. Nulla corporis itaque iure repellendus, quisquam, minima, consequatur praesentium dolorum rerum laudantium porro numquam perspiciatis dolorem enim?</p>'
            },
            {
              'title': 'Roaming internet',
              'html': '<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum modi minima aperiam, saepe. Nulla corporis itaque iure repellendus, quisquam, minima, consequatur praesentium dolorum rerum laudantium porro numquam perspiciatis dolorem enim?</p>'
            },
          ]
        },
        {
          'type': 'text-simple-illustration',
          'classes': ['block', 'block-simple-text-illustration', 'block-bg-stand', 'bg-green'],
          'title': 'Conseil Roaming',
          'content': [
            {
              'title': 'Avant de partir :',
              'html': '<ul><li>Vérifiez que le service Roaming est activé sur votre ligne, sur Orange et Moi*, ou en appelant le 121.</li><li>Consultez les offres Roaming éligibles dans votre pays de destination en haut de cette page**.</li><li>Pensez à activer nos pass Roaming, pour bénéficier des meilleurs tarifs à l’étranger (voir liste des pays).</li><li>Téléchargez l’application Orange et Moi, pour mieux gérer votre ligne depuis l’étranger.</li></ul>',
              'img': {
                'src': 'assets/imgs/contenus/visuel-25.png',
                'alt': 'Promotion',
                'title': 'Promotion'
              },
              'cta': [
                {
                  'href': '#',
                  'title': 'Promos similaire',
                  'text': 'Promos similaire',
                  'class': ['mrs', 'mob-mbs']
                },
                {
                  'href': '#',
                  'title': 'Tous les promos',
                  'text': 'Tous les promos',
                  'class': ['btn--standard'],
                  'icon': ''
                }
              ]
            },
            {
              'title': 'Sur place :',
              'html': '<ul><li>Vérifiez que le service Roaming est activé sur votre ligne, sur Orange et Moi*, ou en appelant le 121.</li><li>Consultez les offres Roaming éligibles dans votre pays de destination en haut de cette page**.</li><li>Pensez à activer nos pass Roaming, pour bénéficier des meilleurs tarifs à l’étranger (voir liste des pays).</li><li>Téléchargez l’application Orange et Moi, pour mieux gérer votre ligne depuis l’étranger.</li></ul>',
              'img': {
                'src': 'assets/imgs/contenus/visuel-25.png',
                'alt': 'Promotion',
                'title': 'Promotion'
              },
              'cta': [
                {
                  'href': '#',
                  'title': 'Promos similaire',
                  'text': 'Promos similaire',
                  'class': ['mrs', 'mob-mbs']
                },
                {
                  'href': '#',
                  'title': 'Tous les promos',
                  'text': 'Tous les promos',
                  'class': ['btn--standard'],
                  'icon': ''
                }
              ]
            }
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

  getRoaming() {
    return this.roaming;
  }

  getAnchorsState() {
    return this.anchors;
  }
}
