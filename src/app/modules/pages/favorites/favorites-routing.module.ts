import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FavoritesComponent } from './components/favorites/favorites.component';


const favoritesRoutes: Routes = [
  { path: 'favorites', component: FavoritesComponent },
];

@NgModule({
  imports: [
    RouterModule.forChild(favoritesRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class FavoritesRoutingModule { }
