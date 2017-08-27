// Modules
import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';

// Components
import { HeaderComponent } from './components/header/header.component';
import { QuizComponent } from './components/quiz/quiz.component';
import { FavoritesComponent } from './components/favorites/favorites.component';
import { HistoryComponent } from './components/history/history.component';
import { MessagesComponent } from './components/messages/messages.component';
import { UserAccountComponent } from './components/user-account/user-account.component';
import { AnchorsComponent } from './components/anchors/anchors.component';

// Services
import { FavoritesService } from './services/favorites.service';
import { HistoryService } from './services/history.service';
import { MessagesService } from './services/messages.service';
import { QuizService } from './services/quiz.service';
import { SiteBrandingComponent } from './components/site-branding/site-branding.component';

@NgModule({
  imports: [
    SharedModule,
  ],
  exports: [
    HeaderComponent
  ],
  declarations: [
    HeaderComponent,
    QuizComponent,
    FavoritesComponent,
    HistoryComponent,
    MessagesComponent,
    UserAccountComponent,
    AnchorsComponent,
    SiteBrandingComponent,
  ],
  providers: [
    FavoritesService,
    HistoryService,
    MessagesService,
    QuizService
  ]
})
export class HeaderModule { }
