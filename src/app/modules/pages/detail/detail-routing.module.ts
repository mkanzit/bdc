import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DetailComponent } from './components/detail/detail.component';

const DetailRoutes: Routes = [
  { path: 'detail', component: DetailComponent },
];

@NgModule({
  imports: [
    RouterModule.forChild(DetailRoutes)
  ],
  exports: [
    RouterModule,
  ]
})

export class DetailRoutingModule { }
