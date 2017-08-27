import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RoamingComponent } from './components/roaming/roaming.component';

const RoamingRoutes: Routes = [
  { path: 'roaming', component: RoamingComponent },
];

@NgModule({
  imports: [
    RouterModule.forChild(RoamingRoutes)
  ],
  exports: [
    RouterModule,
  ]
})

export class RoamingRoutingModule { }
