import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SearchComponent } from './components/search/search.component';

const searchRoutes: Routes = [
  { path: 'search', component: SearchComponent },
];

@NgModule({
  imports: [
    RouterModule.forChild(searchRoutes)
  ],
  exports: [
    RouterModule,
  ]
})

export class OffersRoutingModule { }
