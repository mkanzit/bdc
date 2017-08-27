// Modules
import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { AlertsRoutingModule } from './alerts-routing.module';

// Component
import { AlertsComponent } from './components/alerts/alerts.component';

// Services
import { AlertsService } from './services/alerts.service';

@NgModule({
  imports: [
    SharedModule,
    AlertsRoutingModule,
  ],
  exports: [
    AlertsRoutingModule
  ],
  declarations: [
    AlertsComponent,
  ],
  providers: [
    AlertsService,
  ]
})
export class AlertsModule { }
