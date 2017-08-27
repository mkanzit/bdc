import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FlashNewsComponent } from './components/flash-news/flash-news.component';

const flashNewsRoutes: Routes = [
  { path: 'flash-news', component: FlashNewsComponent },
];

@NgModule({
  imports: [
    RouterModule.forChild(flashNewsRoutes)
  ],
  exports: [
    RouterModule,
  ]
})

export class FlashNewsRoutingModule { }
