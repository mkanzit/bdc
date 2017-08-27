// Modules
import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { DetailRoutingModule } from './detail-routing.module';


// Component
import { DetailComponent } from './components/detail/detail.component';

// Services
import { DetailService } from './services/detail.service';

@NgModule({
  imports: [
    SharedModule,
    DetailRoutingModule,
  ],
  exports: [
    DetailRoutingModule
  ],
  declarations: [
    DetailComponent,
  ],
  providers: [
    DetailService,
  ]
})
export class DetailModule { }
