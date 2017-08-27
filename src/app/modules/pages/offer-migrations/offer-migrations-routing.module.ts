import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OfferImigrationsComponent } from './components/offer-migrations/offer-migrations.component';

const offerImigrationsRoutes: Routes = [
  { path: 'offres-migrations', component: OfferImigrationsComponent },
];

@NgModule({
  imports: [
    RouterModule.forChild(offerImigrationsRoutes)
  ],
  exports: [
    RouterModule,
  ]
})

export class OfferImigrationsRoutingModule { }
