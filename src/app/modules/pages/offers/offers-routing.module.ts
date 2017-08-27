import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OffersComponent } from './components/offers/offers.component';

const offersRoutes: Routes = [
  { path: 'offers', component: OffersComponent },
];

@NgModule({
  imports: [
    RouterModule.forChild(offersRoutes)
  ],
  exports: [
    RouterModule,
  ]
})

export class OffersRoutingModule { }
