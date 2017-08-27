// Modules
import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { CatalogueRoutingModule } from './catalogue-routing.module';

// Components
import { CatalogueComponent } from './components/catalogue/catalogue.component';

// Services
import { CatalogueService } from './services/catalogue.service';
import { CatalogueListComponent } from './components/catalogue-list/catalogue-list.component';
import { CatalogueDetailsComponent } from './components/catalogue-details/catalogue-details.component';

@NgModule({
  imports: [
    SharedModule,
    CatalogueRoutingModule
  ],
  exports: [
    CatalogueRoutingModule
  ],
  declarations: [
    CatalogueComponent,
    CatalogueListComponent,
    CatalogueDetailsComponent
  ],
  providers: [
    CatalogueService
  ]
})
export class CatalogueModule { }
