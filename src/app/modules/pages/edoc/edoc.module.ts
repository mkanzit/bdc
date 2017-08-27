// Modules
import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { EdocRoutingModule } from './edoc-routing.module';

// Component
import { EdocComponent } from './components/edoc/edoc.component';
import { EdocFilterComponent } from './components/edoc-filter/edoc-filter.component';
import { EdocDetailComponent } from './components/edoc-detail/edoc-detail.component';
import { EdocDetailFilterComponent } from './components/edoc-detail-filter/edoc-detail-filter.component';
import { EdocListComponent } from './components/edoc-list/edoc-list.component';

// Services
import { EdocService } from './services/edoc.service';

@NgModule({
  imports: [
    SharedModule,
    EdocRoutingModule,
  ],
  exports: [
    EdocRoutingModule
  ],
  declarations: [
    EdocComponent,
    EdocFilterComponent,
    EdocDetailComponent,
    EdocDetailFilterComponent,
    EdocListComponent
  ],
  providers: [
    EdocService,
  ]
})
export class EdocModule { }
