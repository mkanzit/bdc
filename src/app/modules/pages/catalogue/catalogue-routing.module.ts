import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CatalogueComponent } from './components/catalogue/catalogue.component';
import { CatalogueListComponent } from './components/catalogue-list/catalogue-list.component';
import { CatalogueDetailsComponent } from './components/catalogue-details/catalogue-details.component';


const catalogueRoutes: Routes = [
  {
    path: 'catalogue',
    component: CatalogueComponent,
    children: [
      { path: '', component: CatalogueListComponent },
      { path: 'details', component: CatalogueDetailsComponent },
    ]
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(catalogueRoutes)
  ],
  exports: [
    RouterModule,
  ]
})

export class CatalogueRoutingModule { }
