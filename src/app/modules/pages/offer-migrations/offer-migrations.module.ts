// Modules
import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { OfferImigrationsRoutingModule } from './offer-migrations-routing.module';

// Component
import { OfferImigrationsComponent } from './components/offer-migrations/offer-migrations.component';
import { OfferImigrationsFilterComponent } from './components/offer-migrations-filter/offer-migrations-filter.component';

// Services
import { OfferImigrationsService } from './services/offer-migrations.service';

@NgModule({
  imports: [
    SharedModule,
    OfferImigrationsRoutingModule,
  ],
  exports: [
    OfferImigrationsRoutingModule
  ],
  declarations: [
    OfferImigrationsComponent,
    OfferImigrationsFilterComponent
  ],
  providers: [
    OfferImigrationsService,
  ]
})
export class OfferImigrationsModule { }
