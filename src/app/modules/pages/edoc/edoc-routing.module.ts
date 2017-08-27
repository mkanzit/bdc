import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EdocComponent } from './components/edoc/edoc.component';
import { EdocListComponent } from './components/edoc-list/edoc-list.component';
import { EdocDetailComponent } from './components/edoc-detail/edoc-detail.component';

const edocRoutes: Routes = [
  {
    path: 'edoc',
    component: EdocComponent,
    children: [
      { path: '', component: EdocListComponent },
      { path: ':details', component: EdocDetailComponent }
    ]
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(edocRoutes)
  ],
  exports: [
    RouterModule,
  ]
})

export class EdocRoutingModule { }
