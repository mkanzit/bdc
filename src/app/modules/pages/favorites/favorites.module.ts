// Modules
import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { FavoritesRoutingModule } from './favorites-routing.module';

// Components
import { FavoritesComponent } from './components/favorites/favorites.component';
import { FavoritesFilterComponent } from './components/favorites-filter/favorites-filter.component';

// Services
import { FavoritesService } from './services/favorites.service';

@NgModule({
  imports: [
    SharedModule,
    FavoritesRoutingModule
  ],
  exports: [
    FavoritesRoutingModule
  ],
  declarations: [
    FavoritesComponent,
    FavoritesFilterComponent
  ],
  providers: [
    FavoritesService
  ]
})

export class FavoritesModule { }
