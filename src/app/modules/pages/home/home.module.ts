// Modules
import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { HomeRoutingModule } from './home-routing.module';
import { SearchModule } from '../../global/search/search.module';

// Component
import { HomeComponent } from './components/home/home.component';

// Services
import { HomeService } from './services/home.service';


@NgModule({
  imports: [
    SharedModule,
    HomeRoutingModule,
    SearchModule
  ],
  exports: [
    HomeRoutingModule
  ],
  declarations: [
    HomeComponent,
  ],
  providers: [
    HomeService,
  ]
})
export class HomeModule { }
