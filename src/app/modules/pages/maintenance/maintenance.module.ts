// Modules
import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { MaintenanceRoutingModule } from './maintenance-routing.module';

// Component
import { MaintenanceComponent } from './components/maintenance/maintenance.component';

// Services
import { MaintenanceService } from './services/maintenance.service';

@NgModule({
  imports: [
    SharedModule,
    MaintenanceRoutingModule,
  ],
  exports: [
    MaintenanceRoutingModule
  ],
  declarations: [
    MaintenanceComponent,
  ],
  providers: [
    MaintenanceService,
  ]
})
export class MaintenanceModule { }
