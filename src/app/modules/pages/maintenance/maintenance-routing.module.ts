import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MaintenanceComponent } from './components/maintenance/maintenance.component';

const MaintenanceRoutes: Routes = [
  { path: 'maintenance', component: MaintenanceComponent },
];

@NgModule({
  imports: [
    RouterModule.forChild(MaintenanceRoutes)
  ],
  exports: [
    RouterModule,
  ]
})

export class MaintenanceRoutingModule { }
