import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AlertsComponent } from './components/alerts/alerts.component';

const alertsRoutes: Routes = [
  { path: 'alerts', component: AlertsComponent },
];

@NgModule({
  imports: [
    RouterModule.forChild(alertsRoutes)
  ],
  exports: [
    RouterModule,
  ]
})

export class AlertsRoutingModule { }
