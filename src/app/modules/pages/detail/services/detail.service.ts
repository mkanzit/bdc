import { Injectable } from '@angular/core';
import { Page } from '../../../../shared/_models/page.model';

@Injectable()
export class DetailService {

  detail: Page;
  anchors: Object;

  constructor() {
    this.detail = {
      'title': 'Orange - Détails',
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
            'href': '/news',
            'text': 'Actualités',
            'title': 'Actualités'
          },
          {
            'href': '',
            'text': 'Détails',
            'title': 'Détails'
          }
        ]
      },
      'anchors': {
        'title': 'Liens interne',
        'links': [
          { 'href': '#', 'title': 'lien', 'text': '1- Lorem ipsum dolor ' },
          { 'href': '#', 'title': 'lien', 'text': '2- Lorem ipsum dolor ' },
          { 'href': '#', 'title': 'lien', 'text': '3- Lorem ipsum dolor ' },
          { 'href': '#', 'title': 'lien', 'text': '4- Lorem ipsum dolor ' }
        ]
      },
      'blocks': [
        {
          'type': '',
          'title': 'Détail: Lorem ipsum dolor sit amet',
          'classes': ['block', 'block-detail'],
          'content': [
            {
              'img': {
                'src': 'assets/imgs/contenus/detail.jpg',
                'alt': 'alt',
                'class': 'fl'
              },
              'html': `<h3>Et quidem, inquit, vehementer errat.</h3>

            <p>Lorem ipsum dolor sit amet, 50 Dhs consectetur adipiscing elit. <span>Aenean euismod bibendum laoreet</span>. 20Go Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar tempor. Cum sociis natoque penatibus et magnis
                dis parturient montes, nascetur ridiculus mus.</p>
            <p>Lorem ipsum dolor sit amet, 50 Dhs consectetur adipiscing elit. Aenean euismod bibendum laoreet. <span>20Go Proin gravida dolor sit amet lacus accumsan </span>et viverra justo commodo. Proin sodales pulvinar tempor. Cum sociis natoque penatibus et magnis
                dis parturient montes, nascetur ridiculus mus.</p>

            <ol>
                <li>Quoniam, si dis <span>placet</span>, ab Epicuro loqui discimus.</li>
                <li>Nihil illinc huc pervenit. Eadem nunc mea adversum te oratio est.</li>
            </ol>

            <p>Gerendus est mos, modo recte sentiat. Praeteritis, inquit, gaudeo. Equidem e Cn. Et quidem, inquit, vehementer errat;</p>

            <ul>
                <li>Gerendus est mos, modo recte sentiat. Praeteritis, inquit, gaudeo. Equidem e Cn. Et quidem, inquit, vehementer errat.</li>
                <li>Bonum negas esse divitias, praeposìtum esse dicis.</li>
                <li>Urgent tamen et nihil remittunt.</li>
            </ul>

            <p>Gerendus est mos, modo <a href="#" title="lien de telechargement" download="Orange">recte sentiat</a>. Praeteritis, inquit, gaudeo. Equidem e Cn. Et quidem, inquit, vehementer errat;</p>

            <p>Zenonis est, inquam, hoc Stoici. Tenent mordicus. <a href="#" title="lien simple">Quis Aristidem non mortuum diligit?</a> Is es profecto tu. Bonum incolumis acies: misera caecitas. Quis istud possit, inquit, negare?</p>`,
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

  getTitle() {
    return this.detail.title as string;
  }

  getDetail() {
    return this.detail;
  }
  
  getAnchorsState() {
    return this.anchors;
  }
}
