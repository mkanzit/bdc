import { Component, OnInit, Input } from '@angular/core';

import { OfferImigrationsService } from '../../services/offer-migrations.service';

@Component({
  selector: 'app-offer-migrations-filter',
  templateUrl: './offer-migrations-filter.component.html',
  styleUrls: ['./offer-migrations-filter.component.scss']
})
export class OfferImigrationsFilterComponent implements OnInit {

  @Input() data;

  constructor() {}

  ngOnInit() {}

}
