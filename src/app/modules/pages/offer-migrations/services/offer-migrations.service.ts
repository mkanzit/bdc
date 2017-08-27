import { Injectable } from '@angular/core';
import { Page } from '../../../../shared/_models/page.model';

@Injectable()
export class OfferImigrationsService {

  offerImigrations: Page;

  constructor() {
    this.offerImigrations = {
      'title': 'Changer mon forfait',
      'description': `<p>Vous pouvez faire une demande de changement de forfait à n’importe quel moment du cycle, il suffit de sélectionner l'offre qui vous intéresse. Une fois votre demande effectuée, vous pourrez profiter de votre nouveau forfait dès le prochain cycle de facturation c'est-à-dire le prochain 18 du mois. Nous vous rappelons que les forfaits sans engagement ne permettent pas de bénéficier du programme de fidélité. Ainsi, la migration vers ces forfaits entraînera l'annulation de vos points de fidélité acquis dans le cadre de votre offre actuelle. Toutes les migrations seront effectuées le premier jour du cycle suivant, à savoir le 18 du mois. A l'issue du changement et si vous disposez d'un forfait dont la facturation a lieu à la fin du cycle, vous serez amené à recevoir 2 factures : la première facture relative à la consommation de votre forfait actuel et la 2ème relative à la facturation à l’avance de votre nouveau forfait orange. Si votre contrat n'est pas encore échu et que vous souhaitez changer votre forfait à la baisse, vous serez amené à payer des frais de migration qui seront reportés sur votre prochaine facture.</p>`,
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
            'text': 'Offres des migrations',
            'title': 'Offres des migrations'
          }
        ]
      },
      'anchors': {
        'title': 'Liens interne',
        'links': [
          { 'href': '#', 'title': 'lien', 'text': '1- Lorem ipsum dolor offerImigrations' },
          { 'href': '#', 'title': 'lien', 'text': '2- Lorem ipsum dolor offerImigrations' },
          { 'href': '#', 'title': 'lien', 'text': '3- Lorem ipsum dolor offerImigrations' },
          { 'href': '#', 'title': 'lien', 'text': '4- Lorem ipsum dolor offerImigrations' }
        ]
      },
      'blocks': [
        {
          'type': 'offer-migrations',
          'title': 'Le catalogue des offres Orange :',
          'classes': ['block', 'offer-migrations'],
          'content': [
            {
              'id': 1,
              'title': 'Forfait 2H + 2Go',
              'price': '49.00Dh/Mois',
              'link': {
                'href': '#',
                'title': 'En savoir plus',
                'text': 'En savoir plus'
              },
              'items': [{
                'type': 'internet',
                'icon': 'ic-Internet',
                'offre': '20Go',
                'desc': 'Internet haut débit'
              }, {
                'type': 'appels',
                'icon': 'ic-call',
                'offre': '2h',
                'desc': 'Vers tous les numéros'
              }, {
                'type': 'sms',
                'icon': 'ic-Discussion_more',
                'offre': 'Illimité',
                'desc': 'SMS'
              }, {
                'type': 'frais',
                'offre': 'Frais de changement de forfait',
                'desc': 'Gratuit'
              }]
            },
            {
              'id': 2,
              'title': 'Forfait 10H + 2Go',
              'price': '99.00Dh/Mois',
              'link': {
                'href': '#',
                'title': 'En savoir plus',
                'text': 'En savoir plus'
              },
              'items': [{
                'type': 'internet',
                'icon': 'ic-Internet',
                'offre': '20Go',
                'desc': 'Internet haut débit'
              }, {
                'type': 'appels',
                'icon': 'ic-call',
                'offre': '2h',
                'desc': 'Vers tous les numéros'
              }, {
                'type': 'sms',
                'icon': 'ic-Discussion_more',
                'offre': 'Illimité',
                'desc': 'SMS'
              }, {
                'type': 'frais',
                'offre': 'Frais de changement de forfait',
                'desc': '30Dhs'
              }]
            },
            {
              'id': 3,
              'title': 'Forfait 10H + 2Go',
              'price': '99.00Dh/Mois',
              'link': {
                'href': '#',
                'title': 'En savoir plus',
                'text': 'En savoir plus'
              },
              'items': [{
                'type': 'internet',
                'icon': 'ic-Internet',
                'offre': '20Go',
                'desc': 'Internet haut débit'
              }, {
                'type': 'appels',
                'icon': 'ic-call',
                'offre': '2h',
                'desc': 'Vers tous les numéros'
              }, {
                'type': 'sms',
                'icon': 'ic-Discussion_more',
                'offre': 'Illimité',
                'desc': 'SMS'
              }, {
                'type': 'frais',
                'offre': 'Frais de changement de forfait',
                'desc': '30Dhs'
              }]
            }
          ]
        }
      ]
    }
  }

  getOfferImigrations() {
    return this.offerImigrations;
  }

}
