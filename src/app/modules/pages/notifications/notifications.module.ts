// Modules
import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { NotificationsRoutingModule } from './notifications-routing.module';

// Component
import { NotificationsComponent } from './components/notifications/notifications.component';

// Services
import { NotificationsService } from './services/notifications.service';

@NgModule({
  imports: [
    SharedModule,
    NotificationsRoutingModule,
  ],
  exports: [
    NotificationsRoutingModule
  ],
  declarations: [
    NotificationsComponent,
  ],
  providers: [
    NotificationsService,
  ]
})
export class NotificationsModule { }
