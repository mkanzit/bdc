// Modules
import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { LoginRoutingModule } from './login-routing.module';

// Components
import { LoginComponent } from './components/login/login.component';

// Services
import { LoginService } from './services/login.service';

@NgModule({
  imports: [
    SharedModule,
    LoginRoutingModule
  ],
  exports: [
    LoginRoutingModule
  ],
  declarations: [
    LoginComponent
  ],
  providers: [
    LoginService
  ]
})
export class LoginModule { }
