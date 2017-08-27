// Modules
import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { SitemapRoutingModule } from './sitemap-routing.module';

// Components
import { SitemapComponent } from './components/sitemap/sitemap.component';

// Services
import { SitemapService } from './services/sitemap.service';

@NgModule({
  imports: [
    SharedModule,
    SitemapRoutingModule
  ],
  exports: [
    SitemapRoutingModule
  ],
  declarations: [
    SitemapComponent
  ],
  providers: [
    SitemapService
  ]
})
export class SitemapModule { }
