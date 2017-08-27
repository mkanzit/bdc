// Modules
import { NgModule, ApplicationRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule, Title } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Router, RouterModule } from '@angular/router';
import { HttpModule, Http } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { OwlModule } from 'ngx-owl-carousel';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AgmCoreModule } from '@agm/core';
import { MalihuScrollbarModule } from 'ngx-malihu-scrollbar';

import * as $ from 'jquery';

import { PipesModule } from '../global/pipes/pipes.module';


// Components
import { BreadcrumbComponent } from '../../components/pages/breadcrumb/breadcrumb.component';
import { MenuAsideComponent } from '../../components/pages/menu-aside/menu-aside.component';
import { FlashNewsComponent } from '../../components/global/flash-news/flash-news.component';
import { ProfilerComponent } from '../../components/global/profiler/profiler.component';
import { LangSwitcherComponent } from '../../components/global/lang-switcher/lang-switcher.component';
import { CircleProgressComponent } from '../../components/pages/circle-progress/circle-progress.component';
import { ThemeSimpleComponent } from '../../components/pages/theme-simple/theme-simple.component';
import { TarificationsComponent } from '../../components/pages/tarifications/tarifications.component';
import { OnlineEditorComponent } from '../../components/pages/online-editor/online-editor.component';
import { Mobile4RemonteesComponent } from '../../components/pages/mobile-4-remontees/mobile-4-remontees.component';
import { SimpleTextIllustrationComponent } from '../../components/pages/simple-text-illustration/simple-text-illustration.component';
import { FavoritesItemComponent } from '../../components/pages/favorites-item/favorites-item.component';
import { BlockEdocComponent } from '../../components/pages/block-edoc/block-edoc.component';
import { MediaComponent } from '../../components/pages/media/media.component';
import { OrangeCareComponent } from '../../components/pages/orange-care/orange-care.component';
import { BlockFaqComponent } from '../../components/pages/block-faq/block-faq.component';
import { FaqFilterComponent } from '../../components/pages/faq-filter/faq-filter.component';
import { BlockNewsComponent } from '../../components/pages/block-news/block-news.component';
import { BlockFlashNewsComponent } from '../../components/pages/block-flash-news/block-flash-news.component';
import { BlockNotificationsComponent } from '../../components/pages/block-notifications/block-notifications.component';
import { NotificationsComponent } from '../../components/pages/notifications/notifications.component';
import { BlockAlertsComponent } from '../../components/pages/block-alerts/block-alerts.component';
import { TopNewsComponent } from '../../components/pages/top-news/top-news.component';
import { TopFaqComponent } from '../../components/pages/top-faq/top-faq.component';
import { BlockDetailComponent } from '../../components/pages/block-detail/block-detail.component';
import { BlockSitemapComponent } from '../../components/pages/block-sitemap/block-sitemap.component';
import { BlockListSimpleComponent } from '../../components/pages/block-list-simple/block-list-simple.component';


// Directives
import { MenuAsideDirective } from '../../shared/_directives/menu-aside.directive';
import { StopClickDirective } from '../../shared/_directives/stop-click.directive';
import { ScrollDirective } from '../../shared/_directives/scroll.directive';
import { SelectBoxDirective } from '../../shared/_directives/select.directive';
import { PageClassDirective } from '../../shared/_directives/page-class.directive';
import { PageDirDirective } from '../../shared/_directives/page-dir.directive';
import { ScrollViewDirective } from '../../shared/_directives/scroll-view.directive';

// Services
import { LayoutEventsService } from '../../shared/_events/layout-events.service';
import { PageEventsService } from '../../shared/_events/page-events.service';
import { FlashNewsService } from '../../shared/_services/flash-news.service';
import { AuthService } from '../../shared/_services/auth.service';
import { AuthGuardService } from '../../shared/_services/auth-guard.service';

// Others
import { MAP_KEY } from '../../shared/_constants/constants';

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule,
    OwlModule,
    NgbModule,
    MalihuScrollbarModule.forRoot(),

    PipesModule.forRoot(),
    OwlModule,
    NgbModule.forRoot(),
    AgmCoreModule.forRoot({
      apiKey: MAP_KEY
    }),
  ],
  declarations: [
    BreadcrumbComponent,
    MenuAsideComponent,
    FlashNewsComponent,
    ProfilerComponent,
    LangSwitcherComponent,
    CircleProgressComponent,
    FavoritesItemComponent,
    ThemeSimpleComponent,
    TarificationsComponent,
    OnlineEditorComponent,
    Mobile4RemonteesComponent,
    SimpleTextIllustrationComponent,
    BlockEdocComponent,
    MediaComponent,
    OrangeCareComponent,
    BlockFaqComponent,
    FaqFilterComponent,
    BlockNewsComponent,
    BlockNotificationsComponent,
    NotificationsComponent,
    TopNewsComponent,
    TopFaqComponent,
    BlockDetailComponent,
    BlockAlertsComponent,
    BlockFlashNewsComponent,
    BlockSitemapComponent,

    BlockListSimpleComponent,
    MenuAsideDirective,
    StopClickDirective,
    ScrollDirective,
    SelectBoxDirective,
    PageClassDirective,
    PageDirDirective,
    ScrollViewDirective
  ],
  exports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule,
    OwlModule,
    NgbModule,
    AgmCoreModule,
    MalihuScrollbarModule,

    PipesModule,
    OwlModule,
    NgbModule,

    BreadcrumbComponent,
    MenuAsideComponent,
    FlashNewsComponent,
    ProfilerComponent,
    LangSwitcherComponent,
    CircleProgressComponent,
    FavoritesItemComponent,
    ThemeSimpleComponent,
    TarificationsComponent,
    OnlineEditorComponent,
    Mobile4RemonteesComponent,
    SimpleTextIllustrationComponent,
    BlockEdocComponent,
    MediaComponent,
    OrangeCareComponent,
    BlockFaqComponent,
    FaqFilterComponent,
    BlockNewsComponent,
    BlockNotificationsComponent,
    NotificationsComponent,
    TopNewsComponent,
    TopFaqComponent,
    BlockFlashNewsComponent,
    BlockDetailComponent,
    BlockAlertsComponent,
    BlockSitemapComponent,

    BlockListSimpleComponent,
    MenuAsideDirective,
    StopClickDirective,
    ScrollDirective,
    SelectBoxDirective,
    PageClassDirective,
    PageDirDirective,
    ScrollViewDirective
  ],
  providers: [
    LayoutEventsService,
    PageEventsService,
    FlashNewsService,
    AuthService,
    AuthGuardService,
  ],
})

export class SharedModule { }
