// Modules
import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { NewsRoutingModule } from './news-routing.module';

// Component
import { NewsComponent } from './components/news/news.component';

// Services
import { NewsService } from './services/news.service';

@NgModule({
  imports: [
    SharedModule,
    NewsRoutingModule,
  ],
  exports: [
    NewsRoutingModule
  ],
  declarations: [
    NewsComponent,
  ],
  providers: [
    NewsService,
  ]
})
export class NewsModule { }
