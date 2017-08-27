// Modules
import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { OffersRoutingModule } from './offers-routing.module';

// Component
import { OffersComponent } from './components/offers/offers.component';

// Services
import { OffersService } from './services/offers.service';

@NgModule({
  imports: [
    SharedModule,
    OffersRoutingModule,
  ],
  exports: [
    OffersRoutingModule
  ],
  declarations: [
    OffersComponent,
  ],
  providers: [
    OffersService,
  ]
})
export class OffersModule { }
