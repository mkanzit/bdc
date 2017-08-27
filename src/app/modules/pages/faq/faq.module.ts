// Modules
import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { FaqRoutingModule } from './faq-routing.module';

// Component
import { FaqComponent } from './components/faq/faq.component';

// Services
import { FaqService } from './services/faq.service';

@NgModule({
  imports: [
    SharedModule,
    FaqRoutingModule,
  ],
  exports: [
    FaqRoutingModule
  ],
  declarations: [
    FaqComponent,
  ],
  providers: [
    FaqService,
  ]
})
export class FaqModule { }
