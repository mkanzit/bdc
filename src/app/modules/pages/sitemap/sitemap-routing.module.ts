import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SitemapComponent } from './components/sitemap/sitemap.component';

const sitemapRoutes: Routes = [
  { path: 'plan-du-site', component: SitemapComponent },
];

@NgModule({
  imports: [
    RouterModule.forChild(sitemapRoutes)
  ],
  exports: [
    RouterModule,
  ]
})
export class SitemapRoutingModule { }
