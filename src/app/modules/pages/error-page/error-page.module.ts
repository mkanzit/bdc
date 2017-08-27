// Modules
import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { ErrorPageRoutingModule } from './error-page-routing.module';

// Component
import { ErrorPageComponent } from './components/error-page/error-page.component';

// Services
import { ErrorPageService } from './services/error-page.service';

@NgModule({
  imports: [
    SharedModule,
    ErrorPageRoutingModule,
  ],
  exports: [
    ErrorPageRoutingModule
  ],
  declarations: [
    ErrorPageComponent,
  ],
  providers: [
    ErrorPageService,
  ]
})
export class ErrorPageModule { }
