import { Injectable } from '@angular/core';
import { Page } from '../../../../shared/_models/page.model';

@Injectable()
export class CatalogueService {

  catalogue: Page;
  catalogueDetails: Page;
  categories: Array<any>;
  anchors: Object;
  anchorsList: Object;

  constructor() {
    this.categories = [
      {label: 'Tous les téléphones', term: 'all'},
      {label: 'Smartphones 4G', term: 'smartphone'},
      {label: 'Orange', term: 'orange'},
      {label: 'Samsung', term: 'samsung'},
      {label: 'Huawei', term: 'huawei'},
      {label: 'Apple', term: 'apple'},
    ];


    this.catalogue = {
      'title': 'Orange - Catalogues',
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
            'href': '#',
            'text': 'Catalogue',
            'title': 'Catalogue'
          }
        ]
      },
      'anchors': {
        'title': 'Liens interne',
        'links': [
          {'href': '#', 'title': 'lien', 'text': '1- Lorem ipsum dolor Catalogue'},
          {'href': '#', 'title': 'lien', 'text': '2- Lorem ipsum dolor Catalogue'},
          {'href': '#', 'title': 'lien', 'text': '3- Lorem ipsum dolor Catalogue'},
          {'href': '#', 'title': 'lien', 'text': '4- Lorem ipsum dolor Catalogue'}
        ]
      },
      'blocks': [
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
                'state': false,
                'label': 'Discount'
              },
              'new': {
                'state': true,
                'label': 'Nouveau',
              },
              'label': 'A partir:',
              'tarifpromo': '129.99',
              'tarifdh': '98.00MAD',
              'link': {
                'href': 'details',
                'title': 'Details',
                'text': 'Details'
              },
              'category': 'smartphone',
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
                'label': 'Discount'
              },
              'new': {
                'state': false,
                'label': 'Nouveau',
              },
              'label': 'A partir:',
              'tarifpromo': '129.99',
              'tarifdh': '98.00MAD',
              'link': {
                'href': 'details',
                'title': 'Details',
                'text': 'Details'
              },
              'category': 'smartphone',
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
                'label': 'Discount'
              },
              'new': {
                'state': false,
                'label': 'Nouveau',
              },
              'label': 'A partir:',
              'tarifpromo': '129.99',
              'tarifdh': '98.00MAD',
              'link': {
                'href': 'details',
                'title': 'Details',
                'text': 'Details'
              },
              'category': 'apple',
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
                'label': 'Discount'
              },
              'new': {
                'state': false,
                'label': 'Nouveau',
              },
              'label': 'A partir:',
              'tarifpromo': '129.99',
              'tarifdh': '98.00MAD',
              'link': {
                'href': 'details',
                'title': 'Details',
                'text': 'Details'
              },
              'category': 'apple',
            },
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
                'label': 'Discount'
              },
              'new': {
                'state': false,
                'label': 'Nouveau',
              },
              'label': 'A partir:',
              'tarifpromo': '129.99',
              'tarifdh': '98.00MAD',
              'link': {
                'href': 'details',
                'title': 'Details',
                'text': 'Details'
              },
              'category': 'huawei',
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
                'label': 'Discount'
              },
              'new': {
                'state': false,
                'label': 'Nouveau',
              },
              'label': 'A partir:',
              'tarifpromo': '129.99',
              'tarifdh': '98.00MAD',
              'link': {
                'href': 'details',
                'title': 'Details',
                'text': 'Details'
              },
              'category': 'huawei',
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
                'label': 'Discount'
              },
              'new': {
                'state': false,
                'label': 'Nouveau',
              },
              'label': 'A partir:',
              'tarifpromo': '129.99',
              'tarifdh': '98.00MAD',
              'link': {
                'href': 'details',
                'title': 'Details',
                'text': 'Details'
              },
              'category': 'samsung',
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
                'label': 'Discount'
              },
              'new': {
                'state': false,
                'label': 'Nouveau',
              },
              'label': 'A partir:',
              'tarifpromo': '129.99',
              'tarifdh': '98.00MAD',
              'link': {
                'href': 'details',
                'title': 'Details',
                'text': 'Details'
              },
              'category': 'samsung',
            },
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
                'label': 'Discount'
              },
              'new': {
                'state': false,
                'label': 'Nouveau',
              },
              'label': 'A partir:',
              'tarifpromo': '129.99',
              'tarifdh': '98.00MAD',
              'link': {
                'href': 'details',
                'title': 'Details',
                'text': 'Details'
              },
              'category': 'samsung',
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
                'label': 'Discount'
              },
              'new': {
                'state': false,
                'label': 'Nouveau',
              },
              'label': 'A partir:',
              'tarifpromo': '129.99',
              'tarifdh': '98.00MAD',
              'link': {
                'href': 'details',
                'title': 'Details',
                'text': 'Details'
              },
              'category': 'orange',
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
                'label': 'Discount'
              },
              'new': {
                'state': false,
                'label': 'Nouveau',
              },
              'label': 'A partir:',
              'tarifpromo': '129.99',
              'tarifdh': '98.00MAD',
              'link': {
                'href': 'details',
                'title': 'Details',
                'text': 'Details'
              },
              'category': 'orange',
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
                'label': 'Discount'
              },
              'new': {
                'state': false,
                'label': 'Nouveau',
              },
              'label': 'A partir:',
              'tarifpromo': '129.99',
              'tarifdh': '98.00MAD',
              'link': {
                'href': 'details',
                'title': 'Details',
                'text': 'Details'
              },
              'category': 'orange',
            },
          ],
        },
      ]
    };

    this.catalogueDetails = {
      'title': 'Orange - Catalogues',
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
            'href': '/catalogue',
            'text': 'Catalogue',
            'title': 'Catalogue'
          },
          {
            'href': '#',
            'text': 'Catalogue',
            'title': 'Catalogue'
          }
        ]
      },
      'anchors': {
        'title': 'Liens interne',
        'links': [
          {'href': '#', 'title': 'lien', 'text': '1- Lorem ipsum dolor Catalogue'},
          {'href': '#', 'title': 'lien', 'text': '2- Lorem ipsum dolor Catalogue'},
          {'href': '#', 'title': 'lien', 'text': '3- Lorem ipsum dolor Catalogue'},
          {'href': '#', 'title': 'lien', 'text': '4- Lorem ipsum dolor Catalogue'}
        ]
      },
      'blocks': [
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
                'label': 'Discount'
              },
              'label': 'A partir:',
              'tarifpromo': '129.99',
              'tarifdh': '98.00MAD',
              'link': {
                'href': '/catalogue/details',
                'title': 'Details',
                'text': 'Details'
              },
              'category': 'smartphone',
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
                'label': 'Discount'
              },
              'label': 'A partir:',
              'tarifpromo': '129.99',
              'tarifdh': '98.00MAD',
              'link': {
                'href': '/catalogue/details',
                'title': 'Details',
                'text': 'Details'
              },
              'category': 'smartphone',
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
                'label': 'Discount'
              },
              'label': 'A partir:',
              'tarifpromo': '129.99',
              'tarifdh': '98.00MAD',
              'link': {
                'href': '/catalogue/details',
                'title': 'Details',
                'text': 'Details'
              },
              'category': 'apple',
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
                'label': 'Discount'
              },
              'label': 'A partir:',
              'tarifpromo': '129.99',
              'tarifdh': '98.00MAD',
              'link': {
                'href': '/catalogue/details',
                'title': 'Details',
                'text': 'Details'
              },
              'category': 'apple',
            },
          ],
        },
      ]
    };

    this.anchors = {
      'suggestion': true,
      'like': true,
      'scripting': true,
      'process': true
    };

    this.anchorsList = {
      'suggestion': true,
      'like': true,
      'scripting': true,
      'process': true
    };

  }

  getTitle() {
    return this.catalogue.title as string;
  }

  getCategories() {
    return this.categories;
  }

  getCatalogue() {
    return this.catalogue;
  }

  getCatalogueDetails() {
    return this.catalogueDetails;
  }

  getAnchorsState() {
    return this.anchors;
  }

  getAnchorsStateList() {
    return this.anchorsList;
  }
}
