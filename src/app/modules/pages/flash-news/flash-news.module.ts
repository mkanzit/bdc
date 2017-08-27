// Modules
import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { FlashNewsRoutingModule } from './flash-news-routing.module';

// Component
import { FlashNewsComponent } from './components/flash-news/flash-news.component';

// Services
import { FlashNewsService } from './services/flash-news.service';

@NgModule({
  imports: [
    SharedModule,
    FlashNewsRoutingModule,
  ],
  exports: [
    FlashNewsRoutingModule
  ],
  declarations: [
    FlashNewsComponent,
  ],
  providers: [
    FlashNewsService,
  ]
})
export class FlashNewsModule { }
