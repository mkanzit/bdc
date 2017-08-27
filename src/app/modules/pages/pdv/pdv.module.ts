// Modules
import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { PdvRoutingModule } from './pdv-routing.module';

// Components
import { PdvComponent } from './components/pdv/pdv.component';
import { PdvListComponent } from './components/pdv-list/pdv-list.component';
import { PdvMapComponent } from './components/pdv-map/pdv-map.component';
import { PdvFilterComponent } from './components/pdv-filter/pdv-filter.component';

// Services
import { PdvService } from './services/pdv.service';

@NgModule({
  imports: [
    SharedModule,
    PdvRoutingModule
  ],
  exports: [
    PdvRoutingModule
  ],
  declarations: [
    PdvComponent,
    PdvListComponent,
    PdvMapComponent,
    PdvFilterComponent
  ],
  providers: [
    PdvService
  ]
})
export class PdvModule { }
