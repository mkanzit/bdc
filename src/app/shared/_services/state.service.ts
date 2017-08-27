import { Injectable } from '@angular/core';
import { State } from '../_models/state.model';


@Injectable()
export class StateService {

  currentUser = 'Y. Mostafa';

  state: State;
  stateArab: State;

  navigation;

  constructor() {
    this.state = {
      'site': {
        'title': 'Base de connaissance',
        'date': Date.now(),
        'user': `Bonjour ${this.currentUser}`,
      },
      'menu': {
        'items': [
          {
            'title': 'Mobile',
            'icon': 'icon-menu-mobile',
            'target': '_self',
            'submenu': {
              'label': 'Mobile',
              'items': [
                {
                  'label': 'Forfaits Orange',
                  'childs': [
                    {'href': '/offers', 'label': 'Forfait 2H + 2Go', 'title': 'Forfait 2H + 2Go'},
                    {'href': '/offers', 'label': 'Forfait 10H + 2Go', 'title': 'Forfait 10H + 2Go'},
                    {'href': '/offers', 'label': 'Forfait 10Go + 2H', 'title': 'Forfait 10Go + 2H'},
                    {'href': '/offers', 'label': 'Forfait 12H + 12Go', 'title': 'Forfait 12H + 12Go'},
                    {'href': '/offers', 'label': 'Forfait 30H + 5Go', 'title': 'Forfait 30H + 5Go'},
                    {'href': '/offers', 'label': 'Forfait 30 Go + 10H', 'title': 'Forfait 30 Go + 10H'},
                    {'href': '/offers', 'label': 'Forfait 60H + 20Go', 'title': 'Forfait 60H + 20Go'}
                  ]
                },
                {
                  'label': 'Recharges Orange',
                  'childs': [
                    {'href': '/offers', 'label': 'Carte  SIM Orange', 'title': 'Carte  SIM Orange'},
                    {'href': '/offers', 'label': 'Recharge Dirhams', 'title': 'Recharge Dirhams'},
                    {'href': '/offers', 'label': 'Recharge appels et SMS *1', 'title': 'Recharge appels et SMS *1'},
                    {'href': '/offers', 'label': 'Recharge communauté', 'title': 'Recharge communauté'},
                    {'href': '/offers', 'label': 'Orange *2', 'title': 'Orange *2'},
                    {'href': '/offers', 'label': 'Recharge Internet *3', 'title': 'Recharge Internet *3'},
                    {'href': '/offers', 'label': 'Recharge international *4', 'title': 'Recharge international *4'},
                    {'href': '/offers', 'label': 'Rechrage Divertissement *9', 'title': 'Rechrage Divertissement *9'}
                  ]
                },
                {
                  'label': 'Promotions',
                  'childs': [
                    {'href': '/offers', 'label': 'Promotions', 'title': 'Promotions'},
                  ]
                }
              ],
              'extra': [
                {'href': '/faq', 'label': 'FAQ', 'title': 'FAQ'}
              ]
            }
          },
          {
            'title': 'Internet',
            'icon': 'icon-menu-internet',
            'target': '_self',
            'submenu': {
              'label': 'Internet',
              'items': [
                {
                  'label': 'Forfaits Orange',
                  'childs': [
                    {'href': '/offers', 'label': 'Forfait 2H + 2Go', 'title': 'Forfait 2H + 2Go'},
                    {'href': '/offers', 'label': 'Forfait 10H + 2Go', 'title': 'Forfait 10H + 2Go'},
                    {'href': '/offers', 'label': 'Forfait 10Go + 2H', 'title': 'Forfait 10Go + 2H'},
                    {'href': '/offers', 'label': 'Forfait 12H + 12Go', 'title': 'Forfait 12H + 12Go'},
                    {'href': '/offers', 'label': 'Forfait 30H + 5Go', 'title': 'Forfait 30H + 5Go'},
                    {'href': '/offers', 'label': 'Forfait 30 Go + 10H', 'title': 'Forfait 30 Go + 10H'},
                    {'href': '/offers', 'label': 'Forfait 60H + 20Go', 'title': 'Forfait 60H + 20Go'}
                  ]
                },
                {
                  'label': 'Recharges Orange',
                  'childs': [
                    {'href': '/offers', 'label': 'Carte  SIM Orange', 'title': 'Carte  SIM Orange'},
                    {'href': '/offers', 'label': 'Recharge Dirhams', 'title': 'Recharge Dirhams'},
                    {'href': '/offers', 'label': 'Recharge appels et SMS *1', 'title': 'Recharge appels et SMS *1'},
                    {'href': '/offers', 'label': 'Recharge communauté', 'title': 'Recharge communauté'},
                    {'href': '/offers', 'label': 'Orange *2', 'title': 'Orange *2'},
                    {'href': '/offers', 'label': 'Recharge Internet *3', 'title': 'Recharge Internet *3'},
                    {'href': '/offers', 'label': 'Recharge international *4', 'title': 'Recharge international *4'},
                    {'href': '/offers', 'label': 'Rechrage Divertissement *9', 'title': 'Rechrage Divertissement *9'}
                  ]
                },
                {
                  'label': 'Promotions',
                  'childs': [
                    {'href': '/offers', 'label': 'Promotions', 'title': 'Promotions'},
                  ]
                }
              ],
              'extra': [
                {'href': '/faq', 'label': 'FAQ', 'title': 'FAQ'}
              ]
            }
          },
          {
            'title': 'Fixe',
            'icon': 'icon-menu-fixe',
            'target': '_self',
            'submenu': {
              'label': 'Fixe',
              'items': [
                {
                  'label': 'Forfaits Orange',
                  'childs': [
                    {'href': '/offers', 'label': 'Forfait 2H + 2Go', 'title': 'Forfait 2H + 2Go'},
                    {'href': '/offers', 'label': 'Forfait 10H + 2Go', 'title': 'Forfait 10H + 2Go'},
                    {'href': '/offers', 'label': 'Forfait 10Go + 2H', 'title': 'Forfait 10Go + 2H'},
                    {'href': '/offers', 'label': 'Forfait 12H + 12Go', 'title': 'Forfait 12H + 12Go'},
                    {'href': '/offers', 'label': 'Forfait 30H + 5Go', 'title': 'Forfait 30H + 5Go'},
                    {'href': '/offers', 'label': 'Forfait 30 Go + 10H', 'title': 'Forfait 30 Go + 10H'},
                    {'href': '/offers', 'label': 'Forfait 60H + 20Go', 'title': 'Forfait 60H + 20Go'}
                  ]
                },
                {
                  'label': 'Recharges Orange',
                  'childs': [
                    {'href': '/offers', 'label': 'Carte  SIM Orange', 'title': 'Carte  SIM Orange'},
                    {'href': '/offers', 'label': 'Recharge Dirhams', 'title': 'Recharge Dirhams'},
                    {'href': '/offers', 'label': 'Recharge appels et SMS *1', 'title': 'Recharge appels et SMS *1'},
                    {'href': '/offers', 'label': 'Recharge communauté', 'title': 'Recharge communauté'},
                    {'href': '/offers', 'label': 'Orange *2', 'title': 'Orange *2'},
                    {'href': '/offers', 'label': 'Recharge Internet *3', 'title': 'Recharge Internet *3'},
                    {'href': '/offers', 'label': 'Recharge international *4', 'title': 'Recharge international *4'},
                    {'href': '/offers', 'label': 'Rechrage Divertissement *9', 'title': 'Rechrage Divertissement *9'}
                  ]
                },
                {
                  'label': 'Promotions',
                  'childs': [
                    {'href': '/offers', 'label': 'Promotions', 'title': 'Promotions'},
                  ]
                }
              ],
              'extra': [
                {'href': '/faq', 'label': 'FAQ', 'title': 'FAQ'}
              ]
            }
          }
        ]
      },
      'menuextra': {
        'items': [
          {
            'title': 'eShop',
            'subtitle': 'eShop',
            'icon': 'icon-menu-eshop',
            'href': '/catalogue',
            'target': '_self',
          },
          {
            'title': 'Agences',
            'subtitle': 'Agences',
            'icon': 'icon-menu-agences',
            'href': '/points-de-ventes',
            'target': '_self',
          },
          {
            'title': 'Fibre optique',
            'subtitle': 'Fibre optique',
            'icon': 'icon-menu-agences',
            'href': '/points-de-ventes',
            'target': '_self',
          },
          {
            'title': 'Services',
            'subtitle': 'Services',
            'icon': 'icon-menu-agences',
            'href': '/points-de-ventes',
            'target': '_self',
          },
          {
            'title': 'Process',
            'subtitle': 'Process',
            'icon': 'icon-menu-agences',
            'href': '/points-de-ventes',
            'target': '_self',
          },
        ]
      },
    }


    this.stateArab = {
      'site': {
        'title': 'المعرفة الأساسية',
        'date': Date.now(),
        'user': 'مرحبا مصطفى',
      },
      'menu': {
        'items': [
          {
            'title': 'الجوال',
            'icon': 'icon-menu-mobile',
            'target': '_self',
            'submenu': {
              'label': 'الجوال',
              'items': [
                {
                  'label': 'حزم البرتقال',
                  'childs': [
                    {'href': '/offers', 'label': 'حزمة 2H + 2Go', 'title': 'حزمة 2H + 2Go'},
                    {'href': '/offers', 'label': 'حزمة 10H + 2Go', 'title': 'حزمة 10H + 2Go'},
                    {'href': '/offers', 'label': 'حزمة 10Go + 2H', 'title': 'حزمة 10Go + 2H'},
                    {'href': '/offers', 'label': 'حزمة 12H + 12Go', 'title': 'حزمة 12H + 12Go'},
                    {'href': '/offers', 'label': 'حزمة 30H + 5Go', 'title': 'حزمة 30H + 5Go'},
                    {'href': '/offers', 'label': 'حزمة 30 Go + 10H', 'title': 'حزمة 30 Go + 10H'},
                    {'href': '/offers', 'label': 'حزمة 60H + 20Go', 'title': 'حزمة 60H + 20Go'}
                  ]
                },
                {
                  'label': 'عبوات البرتقال',
                  'childs': [
                    {'href': '/offers', 'label': 'بطاقة SIM البرتقال', 'title': 'بطاقة SIM البرتقال'},
                    {'href': '/offers', 'label': 'عبوة درهم', 'title': 'عبوة درهم'},
                    {'href': '/offers', 'label': 'إعادة ملء المكالمات والرسائل النصية * 1', 'title': 'إعادة ملء المكالمات والرسائل النصية * 1'},
                    {'href': '/offers', 'label': 'اعادة ملء', 'title': 'اعادة ملء'},
                    {'href': '/offers', 'label': 'البرتقال * 2', 'title': 'البرتقال * 2'},
                    {'href': '/offers', 'label': 'الإنترنت اعادة ملء * 3', 'title': 'الإنترنت اعادة ملء * 3'},
                    {'href': '/offers', 'label': 'اعادة ملء الدولي * 4', 'title': 'اعادة ملء الدولي * 4'},
                    {'href': '/offers', 'label': 'اعادة ملء الترفيه * 9', 'title': 'اعادة ملء الترفيه * 9'}
                  ]
                },
                {
                  'label': 'العروض الخاصة',
                  'childs': [
                    {'href': '/offers', 'label': 'العروض الخاصة', 'title': 'العروض الخاصة'},
                  ]
                }
              ],
              'extra': [
                {'href': '/faq', 'label': 'التعليمات', 'title': 'التعليمات'},
              ]
            }
          },
          {
            'title': 'الإنترنت',
            'icon': 'icon-menu-internet',
            'target': '_self',
            'submenu': {
              'label': 'الإنترنت',
              'items': [
                {
                  'label': 'حزم البرتقال',
                  'childs': [
                    {'href': '/offers', 'label': 'حزمة 2H + 2Go', 'title': 'حزمة 2H + 2Go'},
                    {'href': '/offers', 'label': 'حزمة 10H + 2Go', 'title': 'حزمة 10H + 2Go'},
                    {'href': '/offers', 'label': 'حزمة 10Go + 2H', 'title': 'حزمة 10Go + 2H'},
                    {'href': '/offers', 'label': 'حزمة 12H + 12Go', 'title': 'حزمة 12H + 12Go'},
                    {'href': '/offers', 'label': 'حزمة 30H + 5Go', 'title': 'حزمة 30H + 5Go'},
                    {'href': '/offers', 'label': 'حزمة 30 Go + 10H', 'title': 'حزمة 30 Go + 10H'},
                    {'href': '/offers', 'label': 'حزمة 60H + 20Go', 'title': 'حزمة 60H + 20Go'}
                  ]
                },
                {
                  'label': 'عبوات البرتقال',
                  'childs': [
                    {'href': '/offers', 'label': 'بطاقة SIM البرتقال', 'title': 'بطاقة SIM البرتقال'},
                    {'href': '/offers', 'label': 'عبوة درهم', 'title': 'عبوة درهم'},
                    {'href': '/offers', 'label': 'إعادة ملء المكالمات والرسائل النصية * 1', 'title': 'إعادة ملء المكالمات والرسائل النصية * 1'},
                    {'href': '/offers', 'label': 'اعادة ملء', 'title': 'اعادة ملء'},
                    {'href': '/offers', 'label': 'البرتقال * 2', 'title': 'البرتقال * 2'},
                    {'href': '/offers', 'label': 'الإنترنت اعادة ملء * 3', 'title': 'الإنترنت اعادة ملء * 3'},
                    {'href': '/offers', 'label': 'اعادة ملء الدولي * 4', 'title': 'اعادة ملء الدولي * 4'},
                    {'href': '/offers', 'label': 'اعادة ملء الترفيه * 9', 'title': 'اعادة ملء الترفيه * 9'}
                  ]
                },
                {
                  'label': 'العروض الخاصة',
                  'childs': [
                    {'href': '/offers', 'label': 'العروض الخاصة', 'title': 'العروض الخاصة'},
                  ]
                }
              ],
              'extra': [
                {'href': '/faq', 'label': 'التعليمات', 'title': 'التعليمات'},
              ]
            }
          },
          {
            'title': 'ثابت',
            'icon': 'icon-menu-fixe',
            'target': '_self',
            'submenu': {
              'label': 'ثابت',
              'items': [
                {
                  'label': 'حزم البرتقال',
                  'childs': [
                    {'href': '/offers', 'label': 'حزمة 2H + 2Go', 'title': 'حزمة 2H + 2Go'},
                    {'href': '/offers', 'label': 'حزمة 10H + 2Go', 'title': 'حزمة 10H + 2Go'},
                    {'href': '/offers', 'label': 'حزمة 10Go + 2H', 'title': 'حزمة 10Go + 2H'},
                    {'href': '/offers', 'label': 'حزمة 12H + 12Go', 'title': 'حزمة 12H + 12Go'},
                    {'href': '/offers', 'label': 'حزمة 30H + 5Go', 'title': 'حزمة 30H + 5Go'},
                    {'href': '/offers', 'label': 'حزمة 30 Go + 10H', 'title': 'حزمة 30 Go + 10H'},
                    {'href': '/offers', 'label': 'حزمة 60H + 20Go', 'title': 'حزمة 60H + 20Go'}
                  ]
                },
                {
                  'label': 'عبوات البرتقال',
                  'childs': [
                    {'href': '/offers', 'label': 'بطاقة SIM البرتقال', 'title': 'بطاقة SIM البرتقال'},
                    {'href': '/offers', 'label': 'عبوة درهم', 'title': 'عبوة درهم'},
                    {'href': '/offers', 'label': 'إعادة ملء المكالمات والرسائل النصية * 1', 'title': 'إعادة ملء المكالمات والرسائل النصية * 1'},
                    {'href': '/offers', 'label': 'اعادة ملء', 'title': 'اعادة ملء'},
                    {'href': '/offers', 'label': 'البرتقال * 2', 'title': 'البرتقال * 2'},
                    {'href': '/offers', 'label': 'الإنترنت اعادة ملء * 3', 'title': 'الإنترنت اعادة ملء * 3'},
                    {'href': '/offers', 'label': 'اعادة ملء الدولي * 4', 'title': 'اعادة ملء الدولي * 4'},
                    {'href': '/offers', 'label': 'اعادة ملء الترفيه * 9', 'title': 'اعادة ملء الترفيه * 9'}
                  ]
                },
                {
                  'label': 'العروض الخاصة',
                  'childs': [
                    {'href': '/offers', 'label': 'العروض الخاصة', 'title': 'العروض الخاصة'},
                  ]
                }
              ],
              'extra': [
                {'href': '/faq', 'label': 'التعليمات', 'title': 'التعليمات'},
              ]
            }
          }
        ]
      },
      'menuextra': {
        'items': [
          {
            'title': 'التسوق',
            'subtitle': 'التسوق',
            'icon': 'icon-menu-eshop',
            'href': '/points-de-ventes',
            'target': '_self',
          },
          {
            'title': 'وكالات',
            'subtitle': 'وكالات',
            'icon': 'icon-menu-agences',
            'href': '/points-de-ventes',
            'target': '_self',
          },
        ]
      },
    }

    this.navigation = {
      "b2c": [
        {
          "content_type": "link",
          "title": "Mobile",
          "subtitle": "",
          "icon": "icon-menu-mobile",
          "button_style": "btn--standard",
          "external_url": "",
          "internal_url": [],
          "children": [
            {
              "content_type": "link",
              "title": "Liens utiles",
              "subtitle": "",
              "icon": "",
              "button_style": "btn--standard",
              "external_url": "",
              "internal_url": {
                "page_id": 129,
                "page_url": "\/B2C\/Offres-et-services-particuliers\/Offre-Mobile\/Forfaits-Orange\/Forfait-2H-2Go",
                "identifier": "frontpage"
              },
              "children": [
                {
                  "content_type": "link",
                  "title": "Trouver une agence",
                  "subtitle": "",
                  "icon": "ic-Shop_Pin",
                  "button_style": "btn--standard",
                  "external_url": "",
                  "internal_url": [],
                  "children": []
                },
                {
                  "content_type": "link",
                  "title": "Consulter vos factures",
                  "subtitle": "",
                  "icon": "ic-bill",
                  "button_style": "1",
                  "external_url": "[HOST:moncompte]\/gerez-vos-factures",
                  "internal_url": [],
                  "children": []
                },
                {
                  "content_type": "link",
                  "title": "Recharger en ligne",
                  "subtitle": "",
                  "icon": "ic-Top_up",
                  "button_style": "1",
                  "external_url": "[HOST:moncompte]\/e-recharge\/identification",
                  "internal_url": [],
                  "children": []
                },
                {
                  "content_type": "link",
                  "title": "Configurer votre mobile",
                  "subtitle": "Configurer votre mobile",
                  "icon": "ic-Setup_and_Repair_cog",
                  "button_style": "btn--standard",
                  "external_url": "http:\/\/config.orange.ma",
                  "internal_url": [],
                  "children": []
                },
                {
                  "content_type": "link",
                  "title": "Estimer votre consommation internet",
                  "subtitle": "Estimer votre consommation internet",
                  "icon": "ic-Gauge-Mon-Reseau",
                  "button_style": "btn--standard",
                  "external_url": "",
                  "internal_url": [],
                  "children": []
                }
              ]
            },
            {
              "content_type": "link",
              "title": "Boutique en ligne",
              "subtitle": "",
              "icon": "",
              "button_style": "btn--standard",
              "external_url": "https:\/\/boutique.orange.ma\/fr\/mobiles",
              "internal_url": [],
              "children": [{
                "content_type": "link",
                "title": "Smartphones 4G",
                "subtitle": "",
                "icon": "",
                "button_style": "btn--standard",
                "external_url": "https:\/\/boutique.orange.ma\/fr\/mobiles\/4G",
                "internal_url": [],
                "children": []
              }, {
                "content_type": "link",
                "title": "Apple iPhone",
                "subtitle": "",
                "icon": "",
                "button_style": "btn--standard",
                "external_url": "https:\/\/boutique.orange.ma\/fr\/mobiles\/iPhone",
                "internal_url": [],
                "children": []
              }, {
                "content_type": "link",
                "title": "Samsung",
                "subtitle": "",
                "icon": "",
                "button_style": "btn--standard",
                "external_url": "https:\/\/boutique.orange.ma\/fr\/mobiles\/Samsung",
                "internal_url": [],
                "children": []
              }, {
                "content_type": "link",
                "title": "Huawei",
                "subtitle": "",
                "icon": "",
                "button_style": "btn--standard",
                "external_url": "https:\/\/boutique.orange.ma\/fr\/mobiles\/Huawei",
                "internal_url": [],
                "children": []
              }, {
                "content_type": "link",
                "title": "Smartphones Orange",
                "subtitle": "",
                "icon": "",
                "button_style": "btn--standard",
                "external_url": "https:\/\/boutique.orange.ma\/fr\/mobiles\/Orange",
                "internal_url": [],
                "children": []
              }, {
                "content_type": "link",
                "title": "Bons plans",
                "subtitle": "",
                "icon": "",
                "button_style": "",
                "external_url": "[HOST-MYACCOUNT]\/mes-lignes",
                "internal_url": [],
                "children": []
              }]
            },
            {
              "content_type": "link",
              "title": "Assistance",
              "subtitle": "",
              "icon": "",
              "button_style": "",
              "external_url": "",
              "internal_url": [],
              "children": [{
                "content_type": "link",
                "title": "Assistance Mobile",
                "subtitle": "",
                "icon": "",
                "button_style": "btn--standard",
                "external_url": "[HOST-moncompte]\/mes-lignes",
                "internal_url": [],
                "children": []
              }, {
                "content_type": "link",
                "title": "Assistance Internet",
                "subtitle": "",
                "icon": "",
                "button_style": "btn--standard",
                "external_url": "[HOST:moncompte]\/mes-lignes",
                "internal_url": [],
                "children": []
              }, {
                "content_type": "link",
                "title": "Assistance Fixe",
                "subtitle": "",
                "icon": "",
                "button_style": "",
                "external_url": "[HOST-MYACCOUNT]\/mes-lignes",
                "internal_url": [],
                "children": []
              }, {
                "content_type": "link",
                "title": "Assistance Services",
                "subtitle": "",
                "icon": "",
                "button_style": "btn--standard",
                "external_url": "[HOST:moncompte]\/mes-lignes",
                "internal_url": [],
                "children": []
              }, {
                "content_type": "link",
                "title": "Assistance Boutique",
                "subtitle": "",
                "icon": "",
                "button_style": "btn--standard",
                "external_url": "[HOST:moncompte]\/mes-lignes",
                "internal_url": [],
                "children": []
              }, {
                "content_type": "link",
                "title": "Questions fr\u00e9quentes",
                "subtitle": "",
                "icon": "",
                "button_style": "btn--standard",
                "external_url": "[HOST:moncompte]\/mes-lignes",
                "internal_url": [],
                "children": []
              }, {
                "content_type": "link",
                "title": "Forum",
                "subtitle": "",
                "icon": "",
                "button_style": "btn--standard",
                "external_url": "[HOST:moncompte]\/mes-lignes",
                "internal_url": [],
                "children": []
              }, {
                "content_type": "link",
                "title": "Poser une question",
                "subtitle": "",
                "icon": "",
                "button_style": "",
                "external_url": "[HOST-MYACCOUNT]\/mes-lignes",
                "internal_url": [],
                "children": []
              }]
            },
            {
              "content_type": "link",
              "title": "Espace client",
              "subtitle": "",
              "icon": "",
              "button_style": "",
              "external_url": "",
              "internal_url": [],
              "children": [{
                "content_type": "link",
                "title": "Ma ligne",
                "subtitle": "",
                "icon": "",
                "button_style": "",
                "external_url": "[HOST-MYACCOUNT]\/mes-lignes",
                "internal_url": [],
                "children": []
              }, {
                "content_type": "link",
                "title": "Mes avantages",
                "subtitle": "",
                "icon": "",
                "button_style": "",
                "external_url": "[HOST-MYACCOUNT]\/mes-lignes",
                "internal_url": [],
                "children": []
              }, {
                "content_type": "link",
                "title": "Orange Cin\u00e9day",
                "subtitle": "",
                "icon": "ic-Cinema_ticket_2_for_1",
                "button_style": "btn--standard",
                "external_url": "",
                "internal_url": [],
                "children": []
              }, {
                "content_type": "link",
                "title": "T\u00e9l\u00e9charger Orange et moi",
                "subtitle": "",
                "icon": "ic-My_Orange",
                "button_style": "1",
                "external_url": "http:\/\/app.orange.ma",
                "internal_url": [],
                "children": []
              }]
            }
          ]
        },
        {
          "content_type": "link",
          "title": "Internet",
          "subtitle": "",
          "icon": "icon-menu-internet",
          "button_style": "btn--standard",
          "external_url": "",
          "internal_url": [],
          "children": [
            {
              "content_type": "link",
              "title": "Facebook",
              "subtitle": "",
              "icon": "ic-Facebook",
              "button_style": "btn--standard",
              "external_url": "https:\/\/www.facebook.com\/OrangeMaroc",
              "internal_url": [],
              "children": []
            },
            {
              "content_type": "link",
              "title": "Youtube",
              "subtitle": "",
              "icon": "ic-youtube",
              "button_style": "btn--standard",
              "external_url": "https:\/\/youtube.com\/OrangeMaroc",
              "internal_url": [],
              "children": []
            },
            {
              "content_type": "link",
              "title": "LinkedIn",
              "subtitle": "",
              "icon": "ic-linkedin",
              "button_style": "btn--standard",
              "external_url": "https:\/\/www.linkedin.com\/company\/orangemaroc",
              "internal_url": [],
              "children": []
            },
            {
              "content_type": "link",
              "title": "Twitter",
              "subtitle": "",
              "icon": "ic-twitter",
              "button_style": "btn--standard",
              "external_url": "https:\/\/twitter.com\/OrangeMaroc",
              "internal_url": [],
              "children": []
            }
          ]
        },
        {
          "content_type": "link",
          "title": "Fix",
          "subtitle": "",
          "icon": "icon-menu-fixe",
          "button_style": "btn--standard",
          "external_url": "",
          "internal_url": [],
          "children": [
            {
              "content_type": "link",
              "title": "Contactez-nous",
              "subtitle": "",
              "icon": "ic-Control_Centre",
              "button_style": "btn--standard",
              "external_url": "",
              "internal_url": [],
              "children": []
            },
            {
              "content_type": "link",
              "title": "Conditions g\u00e9n\u00e9rales",
              "subtitle": "",
              "icon": "",
              "button_style": "btn--standard",
              "external_url": "",
              "internal_url": [],
              "children": []
            },
            {
              "content_type": "link",
              "title": "Plan du site",
              "subtitle": "",
              "icon": "",
              "button_style": "btn--standard",
              "external_url": "",
              "internal_url": [],
              "children": []
            }
          ]
        }
      ]
    }
  }

  getState() {
    return this.state;
  }

  getStateArab() {
    return this.stateArab;
  }

  getNavigationTree() {
    return this.navigation;
  }

}
