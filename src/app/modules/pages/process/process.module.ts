// Modules
import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { ProcessRoutingModule } from './process-routing.module';

// Component
import { ProcessComponent } from './components/process/process.component';
import { ProcessListComponent } from './components/process-list/process-list.component';
import { ProcessFilterComponent } from './components/process-filter/process-filter.component';
import { ProcessDetailComponent } from './components/process-detail/process-detail.component';
import { ProcessDetailFilterComponent } from './components/process-detail-filter/process-detail-filter.component';

// Services
import { ProcessService } from './services/process.service';

@NgModule({
  imports: [
    SharedModule,
    ProcessRoutingModule,
  ],
  exports: [
    ProcessRoutingModule
  ],
  declarations: [
    ProcessComponent,
    ProcessListComponent,
    ProcessFilterComponent,
    ProcessDetailComponent,
    ProcessDetailFilterComponent
  ],
  providers: [
    ProcessService,
  ]
})
export class ProcessModule { }
