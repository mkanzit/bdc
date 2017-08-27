import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProcessComponent } from './components/process/process.component';
import { ProcessListComponent } from './components/process-list/process-list.component';
import { ProcessDetailComponent } from './components/process-detail/process-detail.component';

const processRoutes: Routes = [
  {
    path: 'process',
    component: ProcessComponent,
    children: [
      { path: '', component: ProcessListComponent },
      { path: ':details', component: ProcessDetailComponent }
    ]
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(processRoutes)
  ],
  exports: [
    RouterModule,
  ]
})

export class ProcessRoutingModule { }
