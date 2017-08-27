import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PdvComponent } from './components/pdv/pdv.component';

const pdvRoutes: Routes = [
  { path: 'points-de-ventes', component: PdvComponent },
];

@NgModule({
  imports: [
    RouterModule.forChild(pdvRoutes)
  ],
  exports: [
    RouterModule,
  ]
})
export class PdvRoutingModule { }
