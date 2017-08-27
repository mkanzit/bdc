// Modules
import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { PromotionsRoutingModule } from './promotions-routing.module';

// Component
import { PromotionsComponent } from './components/promotions/promotions.component';
import { DetailsComponent } from './components/details/details.component';

// Services
import { PromotionsService } from './services/promotions.service';
import { PromoFilterComponent } from './components/filter/promo-filter.component';

@NgModule({
  imports: [
    SharedModule,
    PromotionsRoutingModule,
  ],
  exports: [
    PromotionsRoutingModule,
    DetailsComponent
  ],
  declarations: [
    PromotionsComponent,
    DetailsComponent,
    PromoFilterComponent,
  ],
  providers: [
    PromotionsService,
  ]
})
export class PromotionsModule { }
