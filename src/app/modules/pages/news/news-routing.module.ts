import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewsComponent } from './components/news/news.component';

const newsRoutes: Routes = [
  { path: 'news', component: NewsComponent },
];

@NgModule({
  imports: [
    RouterModule.forChild(newsRoutes)
  ],
  exports: [
    RouterModule,
  ]
})

export class NewsRoutingModule { }
