import { Injectable } from '@angular/core';
import { Page } from '../../../../shared/_models/page.model';

@Injectable()
export class SitemapService {

  sitemap: Page;

  constructor() {
    this.sitemap = {
      'title': 'Plan de site',
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
            'text': 'Plan du site',
            'title': 'Plan du site'
          }
        ]
      },
      'anchors': {
        'title': '',
        'links': []
      },
      'blocks': [
        {
          'type': 'sitemap',
          'classes': ['block', 'block-sitemap'],
          'title': '',
          'content': [
            {
              'title': 'Mobile',
              'sections': [
                {
                  'title': 'Forfaits Orange',
                  'links': [
                    { 'href': '/offers', 'title': 'Forfait 2H + 2Go', 'text': 'Forfait 2H + 2Go' },
                    { 'href': '/offers', 'title': 'Forfait 10H + 2Go', 'text': 'Forfait 10H + 2Go' },
                    { 'href': '/offers', 'title': 'Forfait 10Go + 2H', 'text': 'Forfait 10Go + 2H' },
                    { 'href': '/offers', 'title': 'Forfait 12H + 12Go', 'text': 'Forfait 12H + 12Go' },
                    { 'href': '/offers', 'title': 'Forfait 30H + 5Go', 'text': 'Forfait 30H + 5Go' },
                    { 'href': '/offers', 'title': 'Forfait 30 Go + 10H', 'text': 'Forfait 30 Go + 10H' },
                    { 'href': '/offers', 'title': 'Forfait 60H + 20 Go', 'text': 'Forfait 60H + 20 Go' },
                  ]
                },
                {
                  'title': 'Recharges Orange',
                  'links': [
                    { 'href': '/offers', 'title': 'Carte SIM Orange', 'text': 'Carte SIM Orange' },
                    { 'href': '/offers', 'title': 'Recharge Dirhams', 'text': 'Recharge Dirhams' },
                    { 'href': '/offers', 'title': 'Recharge appels et SMS *1', 'text': 'Recharge appels et SMS *1' },
                    { 'href': '/offers', 'title': 'Recharge communauté Orange *2', 'text': 'Recharge communauté Orange *2' },
                    { 'href': '/offers', 'title': 'Recharge Internet *3', 'text': 'Recharge Internet *3' },
                    { 'href': '/offers', 'title': 'Recharge international *4', 'text': 'Recharge international *4' },
                    { 'href': '/offers', 'title': 'Rechrage Divertissement *9', 'text': 'Rechrage Divertissement *9' },
                  ]
                },
                {
                  'title': 'Promotions',
                  'links': [
                    { 'href': '/promotions', 'title': 'Promotions appels et SMS', 'text': 'Promotions appels et SMS' },
                    { 'href': '/promotions', 'title': 'Promotions communauté Orange', 'text': 'Promotions communauté Orange' },
                    { 'href': '/promotions', 'title': 'Promotions Internet', 'text': 'Promotions Internet' },
                    { 'href': '/promotions', 'title': 'Promotions international', 'text': 'Promotions international' },
                    { 'href': '/promotions', 'title': 'Promotions Divertissement', 'text': 'Promotions Divertissement' },
                  ]
                }
              ]
            },
            {
              'title': 'Internet',
              'sections': [
                {
                  'title': 'Lorem ipsum',
                  'links': [
                    { 'href': '/offers', 'title': 'Lorem ipsum dolor', 'text': 'Lorem ipsum dolor' },
                    { 'href': '/offers', 'title': 'sit amet, consectetur', 'text': 'sit amet, consectetur' },
                    { 'href': '/offers', 'title': 'adipisicing elit', 'text': 'adipisicing elit' },
                  ]
                },
                {
                  'title': 'Incididunt ut labore',
                  'links': [
                    { 'href': '/offers', 'title': 'Lorem ipsum dolor', 'text': 'Lorem ipsum dolor' },
                    { 'href': '/offers', 'title': 'sit amet, consectetur', 'text': 'sit amet, consectetur' },
                    { 'href': '/offers', 'title': 'adipisicing elit,', 'text': 'adipisicing elit,' },
                  ]
                },
                {
                  'title': 'laboris ni',
                  'links': [
                    { 'href': '/offers', 'title': 'Lorem ipsum dolor', 'text': 'Lorem ipsum dolor' },
                    { 'href': '/offers', 'title': 'sit amet, consectetur', 'text': 'sit amet, consectetur' },
                    { 'href': '/offers', 'title': 'adipisicing elit,', 'text': 'adipisicing elit,' },
                  ]
                }
              ]
            },
            {
              'title': 'Fixe',
              'sections': [
                {
                  'title': 'Lorem ipsum',
                  'links': [
                    { 'href': '/offers', 'title': 'Lorem ipsum dolor', 'text': 'Lorem ipsum dolor' },
                    { 'href': '/offers', 'title': 'sit amet, consectetur', 'text': 'sit amet, consectetur' },
                    { 'href': '/offers', 'title': 'adipisicing elit', 'text': 'adipisicing elit' },
                  ]
                },
                {
                  'title': 'Incididunt ut labore',
                  'links': [
                    { 'href': '/offers', 'title': 'Lorem ipsum dolor', 'text': 'Lorem ipsum dolor' },
                    { 'href': '/offers', 'title': 'sit amet, consectetur', 'text': 'sit amet, consectetur' },
                    { 'href': '/offers', 'title': 'adipisicing elit,', 'text': 'adipisicing elit,' },
                  ]
                },
                {
                  'title': 'laboris ni',
                  'links': [
                    { 'href': '/offers', 'title': 'Lorem ipsum dolor', 'text': 'Lorem ipsum dolor' },
                    { 'href': '/offers', 'title': 'sit amet, consectetur', 'text': 'sit amet, consectetur' },
                    { 'href': '/offers', 'title': 'adipisicing elit,', 'text': 'adipisicing elit,' },
                  ]
                }
              ]
            },
            {
              'title': 'Special',
              'sections': [
                {
                  'title': 'Special',
                  'links': [
                    { 'href': '/catalogue', 'title': 'eShop', 'text': 'eShop' },
                    { 'href': '/points-de-ventes', 'title': 'Agences', 'text': 'Agences' },
                  ]
                }
              ]
            },
            {
              'title': 'Extra',
              'sections': [
                {
                  'title': 'Extra',
                  'links': [
                    { 'href': '/faq', 'title': 'FAQ', 'text': 'FAQ' },
                    { 'href': '/scripting', 'title': 'Scripts', 'text': 'Scripts' },
                    { 'href': '/process', 'title': 'Process', 'text': 'Process' },
                  ]
                }
              ]
            },
          ]
        }
      ]
    }
  }

  getTitle() {
    return this.sitemap.title;
  }

  getSitemap() {
    return this.sitemap;
  }

}
