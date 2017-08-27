import { Injectable } from '@angular/core';
import { Page } from '../../../../shared/_models/page.model';

@Injectable()
export class OffersService {

  offers: Page;
  offersArab: Page;
  anchors: Object;


  constructor() {

    this.offers = {
      'title': 'Offres',
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
            'text': 'Offres',
            'title': 'Offres'
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
          'type': 'onlineediteur',
          'classes': ['block', 'block-online-editor'],
          'title': '',
          'content': [
            {
              'title': 'Les avantages',
              'vtype': 'video',
              'src': 'https://www.youtube.com/embed/m-AeELuIXt0',
              'content': [
                'Rejoindre Orange tout en gardant votre numéro, aujourd’hui c’est possible.',
                'Bénéficier d’un <span>réseau 4G</span> performant.',
                '<a href="#">Profiter d’un forfait sans engagement.</a>',
                'Gérer sa facture en toute tranquillité.',
                'Disposer de son propre espace client et personnaliser son forfait.',
              ],
              'link': {
                'href': '/home',
                'title': 'Lorem ispum',
                'text': 'Lorem ispum'
              }
            }
          ]
        },
        {
          'type': 'tarifications',
          'classes': ['block', 'block-tarifications', 'bg-black', 'color-white'],
          'title': 'Tarifications',
          'content': [
            {
              'title': 'Gratuit',
              'content': '<ul><li>12 heures d\'appels</li><li>10 heures vers les numéros Orange</li><li>12 Go d\'internet</li><li>SMS illimités</li></ul><img src="assets/imgs/contenus/img2.png" alt="">',
              'price': '0 DH/mois',
              'gratuite' : true
            },
            {
              'title': 'Tarif 2 dolor',
              'content': '<ul><li>12 heures d\'appels</li><li>10 heures vers les numéros Orange</li><li>12 Go d\'internet</li><li>SMS illimités</li></ul><img src="assets/imgs/contenus/img2.png" alt="">',
              'price': '49 DH/mois',
              'gratuite' : false
            },
            {
              'title': 'Tarif 3 dine',
              'content': '<ul><li>12 heures d\'appels</li><li>10 heures vers les numéros Orange</li><li>12 Go d\'internet</li><li>SMS illimités</li></ul><img src="assets/imgs/contenus/img2.png" alt="">',
              'price': '49 DH/mois',
              'gratuite' : false
            },
            {
              'title': 'Tarif 4 tyes',
              'content': '<ul><li>12 heures d\'appels</li><li>10 heures vers les numéros Orange</li><li>12 Go d\'internet</li><li>SMS illimités</li></ul><img src="assets/imgs/contenus/img2.png" alt="">',
              'price': '49 DH/mois',
              'gratuite' : false
            },
            {
              'title': 'Tarif 5 tyes',
              'content': '<ul><li>12 heures d\'appels</li><li>10 heures vers les numéros Orange</li><li>12 Go d\'internet</li><li>SMS illimités</li></ul><img src="assets/imgs/contenus/img2.png" alt="">',
              'price': '49 DH/mois',
              'gratuite' : false
            },
          ],
        },
        {
          'type': 'mobile-4-remontees',
          'classes': ['block', 'block-mobile-4-remontees', 'block-nos-mobiles', 'bg-white'],
          'title': 'Tarifications',
          'content': [
            {
              'img': {
                'src': 'assets/imgs/contenus/mobile1.png',
                'alt': 'Alcatel One Touch Pixi 3',
                'title': 'Alcatel One Touch Pixi 3'
              },
              'title': 'Alcatel One Touch Pixi 3',
              'desc': '',
              'discount': {
                'state': false,
                'label': '',
              },
              'new': {
                'state': true,
                'label': 'Nouveau',
              },
              'label': 'A partir:',
              'tarifpromo': '129.99',
              'tarifdh': '98.00MAD',
              'link': {
                'href': '#',
                'title': 'Details',
                'text': 'Details'
              }
            },
            {
              'img': {
                'src': 'assets/imgs/contenus/mobile2.png',
                'alt': 'Alcatel One Touch Pixi 3',
                'title': 'Alcatel One Touch Pixi 3'
              },
              'title': 'Alcatel One Touch Pixi 3',
              'desc': '',
              'discount': {
                'state': true,
                'label': 'Discount',
              },
              'new': {
                'state': false,
                'label': '',
              },
              'label': 'A partir:',
              'tarifpromo': '129.99',
              'tarifdh': '98.00MAD',
              'link': {
                'href': '#',
                'title': 'Details',
                'text': 'Details'
              }
            },
            {
              'img': {
                'src': 'assets/imgs/contenus/mobile3.png',
                'alt': 'Alcatel One Touch Pixi 3',
                'title': 'Alcatel One Touch Pixi 3'
              },
              'title': 'Alcatel One Touch Pixi 3',
              'desc': '',
              'discount': {
                'state': true,
                'label': 'Discount',
              },
              'new': {
                'state': false,
                'label': '',
              },
              'label': 'A partir:',
              'tarifpromo': '129.99',
              'tarifdh': '98.00MAD',
              'link': {
                'href': '#',
                'title': 'Details',
                'text': 'Details'
              }
            },
            {
              'img': {
                'src': 'assets/imgs/contenus/mobile4.png',
                'alt': 'Alcatel One Touch Pixi 3',
                'title': 'Alcatel One Touch Pixi 3'
              },
              'title': 'Alcatel One Touch Pixi 3',
              'desc': '',
              'discount': {
                'state': true,
                'label': 'Discount',
              },
              'new': {
                'state': false,
                'label': '',
              },
              'label': 'A partir:',
              'tarifpromo': '129.99',
              'tarifdh': '98.00MAD',
              'link': {
                'href': '#',
                'title': 'Details',
                'text': 'Details'
              }
            },
          ],
        },
        {
          'type': 'text-simple-illustration',
          'classes': ['block', 'block-simple-text-illustration', 'block-bg-stand', 'bg-yellow'],
          'title': '',
          'content': [
            {
              'title': 'Promotion',
              'html': '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar tempor.',
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
        {
          'type': 'text-simple-illustration',
          'classes': ['block', 'block-simple-text-illustration', 'block-bg-stand', 'bg-white'],
          'title': '',
          'content': [
            {
              'title': 'Parcours Clients',
              'html': '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo.</p>',
              'img': {
                'src': '',
                'alt': '',
                'title': ''
              },
              'cta': [
                {
                  'href': '#',
                  'title': 'Règles & Processus',
                  'text': 'Règles & Processus',
                  'class': ['mrs', 'mob-mbs']
                },
                {
                  'href': '#',
                  'title': 'Télécharger la fiche',
                  'text': 'Télécharger la fiche',
                  'class': ['mrs', 'mob-mbs'],
                  'icon': 'ic-Inbox'
                }
              ]
            }
          ]
        },
        {
          'type': 'text-simple-illustration',
          'classes': ['block', 'block-simple-text-illustration', 'block-bg-stand', 'bg-white'],
          'title': '',
          'content': [
            {
              'title': 'Comparatif concurrence',
              'html': '<p>Lorem ipsum dolor sit amet, <span>50 Dhs</span> consectetur adipiscing elit. Aenean euismod bibendum laoreet.	 Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar tempor.</p>',
              'img': {
                'src': '',
                'alt': '',
                'title': ''
              },
              'cta': []
            }
          ]
        },
        {
          'type': 'text-simple-illustration',
          'classes': ['block', 'block-simple-text-illustration', 'block-bg-stand', 'bg-black', 'color-white'],
          'title': '',
          'content': [
            {
              'title': 'La rétention',
              'html': '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar tempor.</p><ul><li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li><li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li><li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li></ul>',
              'img': {
                'src': 'assets/imgs/contenus/visuel-25.png',
                'alt': 'Lorem ipsum',
                'title': 'Lorem ipsum'
              },
              'cta': [
                {
                  'href': '#',
                  'title': 'En savoir plus',
                  'text': 'En savoir plus',
                  'class': ['btn--bb', 'btn--important']
                },
              ]
            }
          ]
        },
        {
          'type': 'text-simple-illustration',
          'classes': ['block', 'block-simple-text-illustration', 'block-bg-stand', 'bg-white'],
          'title': '',
          'content': [
            {
              'title': 'Process liés',
              'html': '<p>Lorem ipsum : <span>dolor sit amet, consectetur adipiscing elit.</span></p><p>Aenean : <span>euismod bibendum laoreet.</span></p><p>Proin gravida : <span>dolor sit amet lacus accumsan et viverra justo commodo. </span></p></ul>',
              'img': {
                'src': '',
                'alt': '',
                'title': ''
              },
              'cta': []
            }
          ]
        },
        {
          'type': 'text-simple-illustration',
          'classes': ['block', 'block-simple-text-illustration', 'block-bg-stand', 'bg-bleu', 'color-black'],
          'title': '',
          'content': [
            {
              'title': 'Précisions',
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
        {
          'type': 'media',
          'classes': [],
          'title': '',
          'content': [
            {
              'media': {
                'type': 'img',
                'src': '#',
                'alt': '',
                'title': ''
              },
              'classes': [],
              'title': '',
              'html': '',
              'cta': [
                {
                  'href': '#',
                  'title': 'Plus d’infos',
                  'text': 'Plus d’infos',
                  'class': ['btn--bb', 'btn--ms']
                },
              ]
            }
          ]
        },
        {
          'type': 'e-doc',
          'title': 'e-Documentaion',
          'classes': ['block', 'block-e-doc', 'bg-pink-dark'],
          'content': [
            {
              'icon': 'ic-document_Word',
              'content': 'Lorem ipsum dolor sit amet, consectetur.',
              'downloadLink': 'https://www.google.com/'
            },
            {
              'icon': 'ic-PDF_file',
              'content': 'ptetur quisquam veniam illo sapiente.',
              'downloadLink': 'https://www.google.com/'
            },
            {
              'icon': 'ic-Generic_Document',
              'content': ' voluepturi accusantium harum consectetur.',
              'downloadLink': 'https://www.google.com/'
            },
          ]
        },
        {
          'type': 'FAQ',
          'title': 'FAQ',
          'classes': ['block', 'block-histoire', 'block-faq'],
          'content': [
            {
              'title': 'titre 01',
              'html': '<ul> <li>et dolore magna aliqua. Ut </li> <li>ion ullamco labo</li> <li>ation ullamco l</li> <li>iat nulla pariatur. Exce</li> </ul> <img src="assets/imgs/contenus/img2.png" alt=""> <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>'
            },
            {
              'title': 'titre 02',
              'html': '<ul> <li>et dolore magna aliqua. Ut </li> <li>ion ullamco labo</li> <li>ation ullamco l</li> <li>iat nulla pariatur. Exce</li> </ul> <img src="assets/imgs/contenus/img2.png" alt=""> <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>'
            },
            {
              'title': 'titre 03',
              'html': '<ul> <li>et dolore magna aliqua. Ut </li> <li>ion ullamco labo</li> <li>ation ullamco l</li> <li>iat nulla pariatur. Exce</li> </ul> <img src="assets/imgs/contenus/img2.png" alt=""> <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>'
            },
            {
              'title': 'titre 04',
              'html': '<ul> <li>et dolore magna aliqua. Ut </li> <li>ion ullamco labo</li> <li>ation ullamco l</li> <li>iat nulla pariatur. Exce</li> </ul> <img src="assets/imgs/contenus/img2.png" alt=""> <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>'
            },
          ]
        },
        {
          'type': 'orange-care',
          'title': 'Orange Care',
          'classes': ['block', 'block-vos-services', 'block-orange-care', 'bg-pink'],
          'content': [
            {
              'icon': 'ic-bill',
              'title': 'Experts Orange dans nos agences',
              'html': '<p>Automatiquement, vos photos, vidéos, musique, documents, contacts et agenda sont sauvegardés.</p>',
              'link': {
                'href': '#',
                'title': 'En savoir plus',
                'text': 'En savoir plus',
              }
            },
            {
              'icon': 'ic-Child_Protection',
              'title': 'Transfert des données',
              'html': '<p>Votre contenu est accessible rapidement et partout, depuis votre smartphone, tablette ou ordinateur.</p>',
              'link': {
                'href': '#',
                'title': 'En savoir plus',
                'text': 'En savoir plus',
              }
            },
            {
              'icon': 'ic-My_Orange',
              'title': 'Réparation en boutique',
              'html': '<p>Partagez vos photos, vidéos et fichiers via les réseaux sociaux avec vos proches n\'a jamais été aussi simple.</p>',
              'link': {
                'href': '#',
                'title': 'En savoir plus',
                'text': 'En savoir plus',
              }
            },
            {
              'icon': 'ic-My_Orange',
              'title': 'Service après vente',
              'html': '<p>Partagez vos photos, vidéos et fichiers via les réseaux sociaux avec vos proches n\'a jamais été aussi simple.</p>',
              'link': {
                'href': '#',
                'title': 'En savoir plus',
                'text': 'En savoir plus',
              }
            },
          ]
        },
        {
          'type': 'media',
          'title': 'Les médias publicitaires',
          'classes': ['block', 'block-media'],
          'content': [
            {
              'classes': ['bg-black', 'color-white'],
              'vid': {
                'vtype': 'img',
                'title': 'visuel',
                'alt': 'visuel',
                'src': 'assets/imgs/contenus/visuel-77.jpg',
              },
              'title': 'Les meilleurs Smartphones',
              'html': '<p>Vous offrire les meilleurs Smatphones sans soucis de paiement</p>',
              'link': {
                'href': '#',
                'title': 'Plus d’infos',
                'text': 'Plus d’infos'
              }
            },
            {
              'classes': ['bg-black', 'color-white'],
              'vid': {
                'vtype': 'img',
                'title': 'visuel',
                'alt': 'visuel',
                'src': 'assets/imgs/contenus/visuel-77.jpg',
              },
              'title': 'Les meilleurs Smartphones',
              'html': '<p>Vous offrire les meilleurs Smatphones sans soucis de paiement</p>',
              'link': {
                'href': '#',
                'title': 'Plus d’infos',
                'text': 'Plus d’infos'
              }
            },
            {
              'classes': ['bg-black', 'color-white'],
              'vid': {
                'vtype': 'img',
                'title': 'visuel',
                'alt': 'visuel',
                'src': 'assets/imgs/contenus/visuel-78.jpg',
              },
              'title': 'Un espace client performant',
              'html': '<ul><li>Lorem ipsum dolor sit amet.</li><li>Lorem ipsum dolor sit amet.</li><li>Lorem ipsum dolor sit amet.</li></ul>',
              'link': {
                'href': '#',
                'title': 'Plus d’infos',
                'text': 'Plus d’infos'
              }
            },
            {
              'classes': ['bg-black', 'color-white'],
              'vid': {
                'vtype': 'img',
                'title': 'visuel',
                'alt': 'visuel',
                'src': 'assets/imgs/contenus/visuel-77.jpg',
              },
              'title': 'Les meilleurs Smartphones',
              'html': '<p>Vous offrire les meilleurs Smatphones sans soucis de paiement</p>',
              'link': {
                'href': '#',
                'title': 'Plus d’infos',
                'text': 'Plus d’infos'
              }
            }
          ]
        },
        {
          'type': 'theme-simple',
          'title': 'Théme simple',
          'classes': ['block', 'block-media'],
          'content': [
            {
              'theme': {
                'title': 'Bon Plan',
                'graph': 'ic-tariff'
              },
              'title': 'Offre Hany 10H + 4G internet',
              'desc': 'This is Photoshop version of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum.',
              'features': [
                '• 60 heures d\'appels',
                '• 20 Go d\'internet',
                '• SMS illimités',
                '• Avec et sans plafonnement',
              ],
              'price': '399 Dhs/ mois',
              'dates': [
                'Date de début : 20 Octobre 2017',
                'Date de fin : 20 Jan 2018'
              ],
              'link': {
                'href': '#',
                'title': 'Call to action',
                'text': 'Call to action'
              },
              'popouts': [
                {
                  'html': '<strong>60</strong><br> heures',
                },
                {
                  'html': '<strong>20Go</strong><br> d\'internet',
                },
              ]
            }
          ]
        }
      ]
    };

    this.offersArab = {
      'title': 'عروض',
      'description': 'أبجد هوز دولور الجلوس امات. أبجد هوز دولور الجلوس امات. أبجد هوز دولور الجلوس امات',
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
            'text': 'عروض',
            'title': 'عروض'
          },
        ]
      },
      'anchors': {
        'title': 'الروابط الداخلية',
        'links': [
          {'href': '#', 'title': 'رابط', 'text': '1- أبجد هوز دولور العروض'},
          {'href': '#', 'title': 'رابط', 'text': '2- أبجد هوز دولور العروض'},
          {'href': '#', 'title': 'رابط', 'text': '3- أبجد هوز دولور العروض'},
          {'href': '#', 'title': 'رابط', 'text': '4- أبجد هوز دولور العروض'}
        ]
      },
      'blocks': [
        {
          'type': 'onlineediteur',
          'classes': ['block', 'block-online-editor'],
          'title': '',
          'content': [
            {
              'title': 'فوائد',
              'vtype': 'video',
              'src': 'https://www.youtube.com/embed/m-AeELuIXt0',
              'content': [
                'تاريخ البرتقال والحفاظ على رقمك، فمن الممكن الآن.',
                'الاستفادة من شبكة 4G قوية.',
                'استمتع بباقة من دون التزام.',
                'إدارة الفاتورة في سلام.',
                'وجود مساحة العميل الخاصة وتخصيص الحزمة الخاصة بهم.',
              ],
              'link': {
                'href': '/home',
                'title': 'أبجد هوز',
                'text': 'أبجد هوز'
              }
            }
          ]
        },
        {
          'type': 'tarifications',
          'classes': ['block', 'block-tarifications', 'bg-black', 'color-white'],
          'title': 'التسعير',
          'content': [
            {
              'title': 'المجاني',
              'content': '<ul><li>12 ساعة من المكالمات</li><li>10:00 إلى أرقام أورانج</li><li>12 جيجا الإنترنت</li><li>الرسائل القصيرة غير محدود</li></ul><img src="assets/imgs/contenus/img2.png" alt="">',
              'price': '0 درهم / شهر',
              'gratuite' : true
            },
            {
              'title': 'سعر 2 دولور',
              'content': '<ul><li>12 ساعة من المكالمات</li><li>10:00 إلى أرقام أورانج</li><li>12 جيجا الإنترنت</li><li>الرسائل القصيرة غير محدود</li></ul><img src="assets/imgs/contenus/img2.png" alt="">',
              'price': '0 درهم / شهر',
              'gratuite' : false
            },
            {
              'title': 'سعر 3 يتعشى',
                'content': '<ul><li>12 ساعة من المكالمات</li><li>10:00 إلى أرقام أورانج</li><li>12 جيجا الإنترنت</li><li>الرسائل القصيرة غير محدود</li></ul><img src="assets/imgs/contenus/img2.png" alt="">',
              'price': '0 درهم / شهر',
              'gratuite' : false
            },
            {
              'title': 'سعر 4 أنواع',
              'content': '<ul><li>12 ساعة من المكالمات</li><li>10:00 إلى أرقام أورانج</li><li>12 جيجا الإنترنت</li><li>الرسائل القصيرة غير محدود</li></ul><img src="assets/imgs/contenus/img2.png" alt="">',
              'price': '0 درهم / شهر',
              'gratuite' : false
            },
            {
              'title': '5 أنواع الأسعار',
              'content': '<ul><li>12 ساعة من المكالمات</li><li>10:00 إلى أرقام أورانج</li><li>12 جيجا الإنترنت</li><li>الرسائل القصيرة غير محدود</li></ul><img src="assets/imgs/contenus/img2.png" alt="">',
              'price': '0 درهم / شهر',
              'gratuite' : false
            },
          ],
        },
        {
          'type': 'mobile-4-remontees',
          'classes': ['block', 'block-mobile-4-remontees', 'block-nos-mobiles', 'bg-white'],
          'title': '',
          'content': [
            {
              'img': {
                'src': 'assets/imgs/contenus/mobile1.png',
                'alt': 'Alcatel One Touch Pixi 3',
                'title': 'Alcatel One Touch Pixi 3'
              },
              'title': 'Alcatel One Touch Pixi 3',
              'desc': '',
              'discount': {
                'state': true,
                'label': 'خصم',
              },
              'new': {
                'state': false,
                'label': '',
              },
              'label': 'ابتداءا:',
              'tarifpromo': '129.99',
              'tarifdh': '98.00MAD',
              'link': {
                'href': '#',
                'title': 'تفاصيل',
                'text': 'تفاصيل'
              }
            },
            {
              'img': {
                'src': 'assets/imgs/contenus/mobile2.png',
                'alt': 'Alcatel One Touch Pixi 3',
                'title': 'Alcatel One Touch Pixi 3'
              },
              'title': 'Alcatel One Touch Pixi 3',
              'desc': '',
              'discount': {
                'state': false,
                'label': '',
              },
              'new': {
                'state': true,
                'label': 'جديد',
              },
              'label': 'ابتداءا:',
              'tarifpromo': '129.99',
              'tarifdh': '98.00 درهم',
              'link': {
                'href': '#',
                'title': 'تفاصيل',
                'text': 'تفاصيل'
              }
            },
            {
              'img': {
                'src': 'assets/imgs/contenus/mobile3.png',
                'alt': 'Alcatel One Touch Pixi 3',
                'title': 'Alcatel One Touch Pixi 3'
              },
              'title': 'Alcatel One Touch Pixi 3',
              'desc': '',
              'discount': {
                'state': true,
                'label': 'خصم',
              },
              'new': {
                'state': false,
                'label': '',
              },
              'label': 'ابتداءا:',
              'tarifpromo': '129.99',
              'tarifdh': '98.00 درهم',
              'link': {
                'href': '#',
                'title': 'تفاصيل',
                'text': 'تفاصيل'
              }
            },
            {
              'img': {
                'src': 'assets/imgs/contenus/mobile4.png',
                'alt': 'Alcatel One Touch Pixi 3',
                'title': 'Alcatel One Touch Pixi 3'
              },
              'title': 'Alcatel One Touch Pixi 3',
              'desc': '',
              'discount': {
                'state': true,
                'label': 'خصم',
              },
              'new': {
                'state': false,
                'label': '',
              },
              'label': 'ابتداءا:',
              'tarifpromo': '129.99',
              'tarifdh': '98.00 درهم',
              'link': {
                'href': '#',
                'title': 'تفاصيل',
                'text': 'تفاصيل'
              }
            },
          ],
        },
        {
          'type': 'text-simple-illustration',
          'classes': ['block', 'block-simple-text-illustration', 'block-bg-stand', 'bg-yellow'],
          'title': '',
          'content': [
            {
              'title': 'ترويج',
              'html': '<p>أبجد هوز دولور الجلوس امات أبجد هوز دولور الجلوس امات أبجد هوز دولور الجلوس امات أبجد هوز دولور الجلوس امات أبجد هوز دولور الجلوس امات أبجد هوز دولور الجلوس امات أبجد هوز دولور الجلوس امات',
              'img': {
                'src': 'assets/imgs/contenus/visuel-25.png',
                'alt': 'ترويج',
                'title': 'ترويج'
              },
              'cta': [
                {
                  'href': '#',
                  'title': 'عروض مشابهة',
                  'text': 'عروض مشابهة',
                  'class': ['mrs', 'mob-mbs']
                },
                {
                  'href': '#',
                  'title': 'جميع العروض',
                  'text': 'جميع العروض',
                  'class': ['btn--standard'],
                  'icon': ''
                }
              ]
            }
          ]
        },
        {
          'type': 'text-simple-illustration',
          'classes': ['block', 'block-simple-text-illustration', 'block-bg-stand', 'bg-white'],
          'title': '',
          'content': [
            {
              'title': 'الزبائن الدورات',
              'html': '<p>أبجد هوز دولور الجلوس امات أبجد هوز دولور الجلوس امات أبجد هوز دولور الجلوس امات أبجد هوز دولور الجلوس امات أبجد هوز دولور الجلوس امات أبجد هوز دولور الجلوس امات أبجد هوز دولور الجلوس امات',
              'img': {
                'src': '',
                'alt': '',
                'title': ''
              },
              'cta': [
                {
                  'href': '#',
                  'title': 'القواعد و العمليات',
                  'text': 'القواعد و العمليات',
                  'class': ['mrs', 'mob-mbs']
                },
                {
                  'href': '#',
                  'title': 'تحميل ملف',
                  'text': 'تحميل ملف',
                  'class': ['mrs', 'mob-mbs'],
                  'icon': 'ic-Inbox'
                }
              ]
            }
          ]
        },
        {
          'type': 'text-simple-illustration',
          'classes': ['block', 'block-simple-text-illustration', 'block-bg-stand', 'bg-white'],
          'title': '',
          'content': [
            {
              'title': 'مقارنة المنافسة',
              'html': '<p>أبجد هوز دولور الجلوس امات أبجد هوز دولور الجلوس امات أبجد هوز دولور الجلوس امات أبجد هوز دولور الجلوس امات أبجد هوز دولور الجلوس امات أبجد هوز دولور الجلوس امات أبجد هوز دولور الجلوس امات',
              'img': {
                'src': '',
                'alt': '',
                'title': ''
              },
              'cta': []
            }
          ]
        },
        {
          'type': 'text-simple-illustration',
          'classes': ['block', 'block-simple-text-illustration', 'block-bg-stand', 'bg-black', 'color-white'],
          'title': '',
          'content': [
            {
              'title': 'استبقاء',
              'html': '<p>أبجد هوز دولور الجلوس امات أبجد هوز دولور الجلوس امات أبجد هوز دولور الجلوس امات أبجد هوز دولور الجلوس امات أبجد هوز دولور الجلوس امات أبجد هوز دولور الجلوس امات أبجد هوز دولور الجلوس امات',
              'img': {
                'src': 'assets/imgs/contenus/visuel-25.png',
                'alt': 'أبجد هوز',
                'title': 'أبجد هوز'
              },
              'cta': [
                {
                  'href': '#',
                  'title': 'اقرأ المزيد',
                  'text': 'اقرأ المزيد',
                  'class': ['btn--bb', 'btn--important']
                },
              ]
            }
          ]
        },
        {
          'type': 'text-simple-illustration',
          'classes': ['block', 'block-simple-text-illustration', 'block-bg-stand', 'bg-white'],
          'title': '',
          'content': [
            {
              'title': 'عملية ذات الصلة',
              'html': '<p>أبجد هوز دولور الجلوس امات أبجد هوز دولور الجلوس امات أبجد هوز دولور الجلوس امات أبجد هوز دولور الجلوس امات أبجد هوز دولور الجلوس امات أبجد هوز دولور الجلوس امات أبجد هوز دولور الجلوس امات',
              'img': {
                'src': '',
                'alt': '',
                'title': ''
              },
              'cta': []
            }
          ]
        },
        {
          'type': 'text-simple-illustration',
          'classes': ['block', 'block-simple-text-illustration', 'block-bg-stand', 'bg-bleu', 'color-black'],
          'title': '',
          'content': [
            {
              'title': 'توضيحات',
              'html': '<p>أبجد هوز دولور الجلوس امات أبجد هوز دولور الجلوس امات أبجد هوز دولور الجلوس امات أبجد هوز دولور الجلوس امات أبجد هوز دولور الجلوس امات أبجد هوز دولور الجلوس امات أبجد هوز دولور الجلوس امات',
              'img': {
                'src': '',
                'alt': '',
                'title': ''
              },
              'cta': []
            }
          ]
        },
        {
          'type': 'media',
          'classes': [],
          'title': '',
          'content': [
            {
              'media': {
                'type': 'img',
                'src': '#',
                'alt': '',
                'title': ''
              },
              'classes': [],
              'title': '',
              'html': '',
              'cta': [
                {
                  'href': '#',
                  'title': 'أكثر معلومات',
                  'text': 'أكثر معلومات',
                  'class': ['btn--bb', 'btn--ms']
                },
              ]
            }
          ]
        },
        {
          'type': 'e-doc',
          'title': 'توثيق',
          'classes': ['block', 'block-e-doc', 'bg-pink-dark'],
          'content': [
            {
              'icon': 'ic-document_Word',
              'content': 'أبجد هوز دولور الجلوس امات',
              'downloadLink': 'https://www.google.com/'
            },
            {
              'icon': 'ic-PDF_file',
              'content': 'أبجد هوز دولور الجلوس امات',
              'downloadLink': 'https://www.google.com/'
            },
            {
              'icon': 'ic-Generic_Document',
              'content': 'أبجد هوز دولور الجلوس امات',
              'downloadLink': 'https://www.google.com/'
            },
          ]
        },
        {
          'type': 'FAQ',
          'title': 'التعليمات',
          'classes': ['block', 'block-histoire', 'block-faq'],
          'content': [
            {
              'title': 'عنوان 01',
              'html': '<ul> <li>أبجد هوز دولور الجلوس امات </li> <li>مختبر أيون</li> <li>مختبر أيون</li> <li>معهد التكنولوجيا التطبيقية</li> </ul> <img src="assets/imgs/contenus/img2.png" alt=""> <p>أبجد هوز دولور الجلوس امات أبجد هوز دولور الجلوس امات أبجد هوز دولور الجلوس امات</p>'
            },
            {
              'title': 'عنوان 02',
              'html': '<ul> <li>أبجد هوز دولور الجلوس امات </li> <li>مختبر أيون</li> <li>مختبر أيون</li> <li>معهد التكنولوجيا التطبيقية</li> </ul> <img src="assets/imgs/contenus/img2.png" alt=""> <p>أبجد هوز دولور الجلوس امات أبجد هوز دولور الجلوس امات أبجد هوز دولور الجلوس امات</p>'
            },
            {
              'title': 'عنوان 03',
              'html': '<ul> <li>أبجد هوز دولور الجلوس امات </li> <li>مختبر أيون</li> <li>مختبر أيون</li> <li>معهد التكنولوجيا التطبيقية</li> </ul> <img src="assets/imgs/contenus/img2.png" alt=""> <p>أبجد هوز دولور الجلوس امات أبجد هوز دولور الجلوس امات أبجد هوز دولور الجلوس امات</p>'
            },
            {
              'title': 'عنوان 04',
              'html': '<ul> <li>أبجد هوز دولور الجلوس امات </li> <li>مختبر أيون</li> <li>مختبر أيون</li> <li>معهد التكنولوجيا التطبيقية</li> </ul> <img src="assets/imgs/contenus/img2.png" alt=""> <p>أبجد هوز دولور الجلوس امات أبجد هوز دولور الجلوس امات أبجد هوز دولور الجلوس امات</p>'
            },
          ]
        },
        {
          'type': 'orange-care',
          'title': 'العناية البرتقال',
          'classes': ['block', 'block-vos-services', 'block-orange-care', 'bg-pink'],
          'content': [
            {
              'icon': 'ic-bill',
              'title': 'خبراء البرتقال في وكالاتنا',
              'html': '<p>تلقائيا، وتدعم الصور ومقاطع الفيديو والموسيقى والوثائق وعناوين الاتصالات والروزنامة تصل.</p>',
              'link': {
                'href': '#',
                'title': 'اقرأ المزيد',
                'text': 'اقرأ المزيد',
              }
            },
            {
              'icon': 'ic-Child_Protection',
              'title': 'نقل البيانات',
              'html': '<p>المحتوى الخاص بك يمكن الوصول إليها بسرعة وفي كل مكان من هاتفك الذكي أو جهازك اللوحي أو الكمبيوتر.</p>',
              'link': {
                'href': '#',
                'title': 'اقرأ المزيد',
                'text': 'اقرأ المزيد',
              }
            },
            {
              'icon': 'ic-My_Orange',
              'title': 'ورشة لاصلاح',
              'html': '<p>وكانت مشاركة الصور والفيديو والملفات عبر الشبكات الاجتماعية مع الأصدقاء والعائلة لم تكن أسهل.</p>',
              'link': {
                'href': '#',
                'title': 'اقرأ المزيد',
                'text': 'اقرأ المزيد',
              }
            },
            {
              'icon': 'ic-My_Orange',
              'title': 'خدمة ما بعد البيع',
              'html': '<p>وكانت مشاركة الصور والفيديو والملفات عبر الشبكات الاجتماعية مع الأصدقاء والعائلة لم تكن أسهل.</p>',
              'link': {
                'href': '#',
                'title': 'اقرأ المزيد',
                'text': 'اقرأ المزيد',
              }
            },
          ]
        },
        {
          'type': 'media',
          'title': 'وسائل الاعلام الإعلان',
          'classes': ['block', 'block-media'],
          'content': [
            {
              'classes': ['bg-black', 'color-white'],
              'vid': {
                'vtype': 'img',
                'title': 'بصري',
                'alt': 'بصري',
                'src': 'assets/imgs/contenus/visuel-77.jpg',
              },
              'title': 'أفضل الهواتف الذكية',
              'html': '<p>أفضل دفع الهم الهواتف الذكية</p>',
              'link': {
                'href': '#',
                'title': 'أكثر معلومات',
                'text': 'أكثر معلومات'
              }
            },
            {
              'classes': ['bg-black', 'color-white'],
              'vid': {
                'vtype': 'img',
                'title': 'بصري',
                'alt': 'بصري',
                'src': 'assets/imgs/contenus/visuel-77.jpg',
              },
              'title': 'أفضل الهواتف الذكية',
              'html': '<p>أفضل دفع الهم الهواتف الذكية</p>',
              'link': {
                'href': '#',
                'title': 'أكثر معلومات',
                'text': 'أكثر معلومات'
              }
            },
            {
              'classes': ['bg-black', 'color-white'],
              'vid': {
                'vtype': 'img',
                'title': 'بصري',
                'alt': 'بصري',
                'src': 'assets/imgs/contenus/visuel-78.jpg',
              },
              'title': 'مساحة العملاء بكفاءة',
              'html': '<ul><li>أبجد هوز دولور الجلوس امات.</li><li>أبجد هوز دولور الجلوس امات.</li><li>أبجد هوز دولور الجلوس امات.</li></ul>',
              'link': {
                'href': '#',
                'title': 'أكثر معلومات',
                'text': 'أكثر معلومات'
              }
            },
            {
              'classes': ['bg-black', 'color-white'],
              'vid': {
                'vtype': 'img',
                'title': 'بصري',
                'alt': 'بصري',
                'src': 'assets/imgs/contenus/visuel-77.jpg',
              },
              'title': 'أفضل الهواتف الذكية',
              'html': '<p>أفضل دفع الهم الهواتف الذكية</p>',
              'link': {
                'href': '#',
                'title': 'أكثر معلومات',
                'text': 'أكثر معلومات'
              }
            }
          ]
        },
        {
          'type': 'theme-simple',
          'title': 'موضوع واحد',
          'classes': ['block', 'block-media'],
          'content': [
            {
              'theme': {
                'title': 'خطة جيدة',
                'graph': 'ic-tariff'
              },
              'title': 'هذا هو فوتوشوب إصدار أبجد هوز.',
              'desc': 'هذا هو فوتوشوب إصدار أبجد هوز. هذا هو فوتوشوب إصدار أبجد هوز. هذا هو فوتوشوب إصدار أبجد هوز. هذا هو فوتوشوب إصدار أبجد هوز.',
              'features': [
                '• 60 ساعة من المكالمات',
                '• 20 الإنترنت',
                '• الرسائل القصيرة غير محدود',
                '• مع وبدون سقف',
              ],
              'price': '399 درهم / شهر',
              'dates': [
                'تاريخ البدء: 20 أكتوبر 2017',
                'تاريخ الانتهاء: 20 يناير 2018'
              ],
              'link': {
                'href': '#',
                'title': 'دعوة إلى العمل',
                'text': 'دعوة إلى العمل'
              },
              'popouts': [
                {
                  'html': '<strong>60</strong><br> ساعات',
                },
                {
                  'html': '<strong>20Go</strong><br> الإنترنت',
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
      'scripting': true,
      'process': true
    };
  }

  getOffers() {
    return this.offers;
  }

  getOffersArab() {
    return this.offersArab;
  }

  getAnchorsState() {
    return this.anchors;
  }

}
