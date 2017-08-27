// Modules
import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { RoamingRoutingModule } from './roaming-routing.module';

// Component
import { RoamingComponent } from './components/roaming/roaming.component';

// Services
import { RoamingService } from './services/roaming.service';

@NgModule({
  imports: [
    SharedModule,
    RoamingRoutingModule,
  ],
  exports: [
    RoamingRoutingModule
  ],
  declarations: [
    RoamingComponent,
  ],
  providers: [
    RoamingService,
  ]
})
export class RoamingModule { }
