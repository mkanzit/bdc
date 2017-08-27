import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PromotionsComponent } from './components/promotions/promotions.component';
import { DetailsComponent } from './components/details/details.component';

const PromotionsRoutes: Routes = [
  { path: 'promotions', component: PromotionsComponent },
  { path: 'promotions/:id', component: DetailsComponent},
];

@NgModule({
  imports: [
    RouterModule.forChild(PromotionsRoutes)
  ],
  exports: [
    RouterModule,
  ]
})

export class PromotionsRoutingModule { }
