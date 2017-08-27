import { Component, OnInit, HostBinding } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { LayoutEventsService } from '../../../../../shared/_events/layout-events.service';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  @HostBinding('class.rtl') rtl: boolean;

  active: boolean;
  query = '';
  queryFilter: RegExp;

  historyTerms: Array<Object>;
  historyTermsFiltered: Array<Object>;
  favoritesTerms: Array<Object>;
  favoritesTermsFiltered: Array<Object>;

  constructor(
    private layoutEvents: LayoutEventsService
  ) {

    this.active = false;
    this.rtl = false;

    this.historyTerms = [
      {
        'id': 1,
        'query': 'Avantages offre Hany@',
        'term': 'hany'
      },
      {
        'id': 2,
        'query': 'Comment activer le service',
        'term': 'activer'
      },
      {
        'id': 3,
        'query': 'roaming',
        'term': 'roaming'
      },
      {
        'id': 4,
        'query': 'Débit est bas',
        'term': 'debit'
      },
      {
        'id': 5,
        'query': 'Code de déverrouillage',
        'term': 'deverrouillage'
      },
      {
        'id': 6,
        'query': 'Facture impayée',
        'term': 'facture'
      }
    ];

    this.favoritesTerms = [
      {
        'id': 1,
        'query': 'Débit est bas',
        'term': 'debit'
      },
      {
        'id': 2,
        'query': 'Code de déverrouillage',
        'term': 'deverrouillage'
      },
      {
        'id': 3,
        'query': 'Facture impayée',
        'term': 'facture'
      },
      {
        'id': 4,
        'query': 'Avantages offre Hany',
        'term': 'hany'
      },
      {
        'id': 5,
        'query': 'Comment activer le service',
        'term': 'activer'
      },
      {
        'id': 6,
        'query': 'Le roaming tarification',
        'term': 'tarification'
      }
    ]

    this.layoutEvents.getRtl().subscribe((rtl) => {
      this.rtl = rtl;
    })
  }

  ngOnInit() {
    this.historyTermsFiltered   = this.historyTerms;
    this.favoritesTermsFiltered = this.favoritesTerms;
  }

  clean() {
    this.query = '';
  }

  updateQuery(query: string) {
    this.active = true;

    this.queryFilter = new RegExp(query, 'i');

    this.favoritesTermsFiltered = this.favoritesTerms.filter((item) => {
      return this.queryFilter.test(item['term']);
    })

    this.historyTermsFiltered = this.historyTerms.filter((item) => {
      return this.queryFilter.test(item['term']);
    })

    if ( query === '' ) {
      this.active = false;
    }
  }

  select(term) {
    this.query = term['query'];
    this.active = false;
  }

  reduceHistory(index: number) {
    this.historyTermsFiltered.splice(index, 1);
  }

  reduceFavorites(index: number) {
    // this.favoritesTermsFiltered.splice(index, 1);
  }

}
