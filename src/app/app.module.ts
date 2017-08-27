// Modules
import { NgModule, LOCALE_ID } from '@angular/core';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { SharedModule } from './modules/shared/shared.module';
import { AppRoutingModule } from './app-routing.module';

import { HeaderModule } from './modules/global/header/header.module';
import { MenuModule } from './modules/global/menu/menu.module';

import { LoginModule } from './modules/pages/login/login.module';
import { HomeModule } from './modules/pages/home/home.module';
import { OffersModule } from './modules/pages/offers/offers.module';
import { FaqModule } from './modules/pages/faq/faq.module';
import { NewsModule } from './modules/pages/news/news.module';
import { DetailModule } from './modules/pages/detail/detail.module';
import { AlertsModule } from './modules/pages/alerts/alerts.module';
import { NotificationsModule } from './modules/pages/notifications/notifications.module';
import { FlashNewsModule } from './modules/pages/flash-news/flash-news.module';
import { PromotionsModule } from './modules/pages/promotions/promotions.module';
import { OfferImigrationsModule } from './modules/pages/offer-migrations/offer-migrations.module';
import { RoamingModule } from './modules/pages/roaming/roaming.module';
import { EdocModule } from './modules/pages/edoc/edoc.module';
import { PdvModule } from './modules/pages/pdv/pdv.module';
import { MaintenanceModule } from './modules/pages/maintenance/maintenance.module';
import { ErrorPageModule } from './modules/pages/error-page/error-page.module';
import { SitemapModule } from './modules/pages/sitemap/sitemap.module';
import { ProcessModule } from './modules/pages/process/process.module';
import { QuizModule } from './modules/pages/quiz/quiz.module';
import { CatalogueModule } from './modules/pages/catalogue/catalogue.module';
import { ScriptingModule } from './modules/pages/scripting/scripting.module';
import { FavoritesModule } from './modules/pages/favorites/favorites.module';


// Router state
import { RouteReuseStrategy } from '@angular/router';
import { CustomReuseStrategy } from './shared/_router/reuse.strategy';

// Components
import { AppComponent } from './app.component';

// Services
import { StateService } from './shared/_services/state.service';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    HeaderModule,
    MenuModule,

    SharedModule,
    LoginModule,
    HomeModule,
    OffersModule,
    FaqModule,
    NewsModule,
    AlertsModule,
    DetailModule,
    NotificationsModule,
    FlashNewsModule,
    PromotionsModule,
    OfferImigrationsModule,
    RoamingModule,
    EdocModule,
    PdvModule,
    MaintenanceModule,
    ErrorPageModule,
    SitemapModule,
    ProcessModule,
    QuizModule,
    CatalogueModule,
    ScriptingModule,
    FavoritesModule,

    AppRoutingModule,
  ],
  providers: [
    StateService,
    { provide: LOCALE_ID, useValue: 'fr' },
    { provide: RouteReuseStrategy, useClass: CustomReuseStrategy },
    { provide: LocationStrategy, useClass: HashLocationStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
