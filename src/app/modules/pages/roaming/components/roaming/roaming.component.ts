import { Component, OnInit, HostBinding } from '@angular/core';

import { Title } from '@angular/platform-browser';
import { SITE_NAME_PREFIX } from '../../../../../shared/_constants/constants';

import { Page } from '../../../../../shared/_models/page.model';
import { RoamingService } from '../../services/roaming.service';
import { PageEventsService } from '../../../../../shared/_events/page-events.service';
import { LayoutEventsService } from '../../../../../shared/_events/layout-events.service';

import { BreadcrumbComponent } from '../../../../../components/pages/breadcrumb/breadcrumb.component';
import { MenuAsideComponent } from '../../../../../components/pages/menu-aside/menu-aside.component';
import { ThemeSimpleComponent } from '../../../../../components/pages/theme-simple/theme-simple.component';
import { TarificationsComponent } from '../../../../../components/pages/tarifications/tarifications.component';
import { OnlineEditorComponent } from '../../../../../components/pages/online-editor/online-editor.component';
import { Mobile4RemonteesComponent } from '../../../../../components/pages/mobile-4-remontees/mobile-4-remontees.component';
import { SimpleTextIllustrationComponent } from '../../../../../components/pages/simple-text-illustration/simple-text-illustration.component';
import { OrangeCareComponent } from '../../../../../components/pages/orange-care/orange-care.component';
import { BlockFaqComponent } from '../../../../../components/pages/block-faq/block-faq.component';

@Component({
  selector: 'app-roaming',
  templateUrl: './roaming.component.html',
  styleUrls: ['./roaming.component.scss']
})
export class RoamingComponent implements OnInit {
  @HostBinding('class.rtl') rtl: boolean;

  roaming: Page;
  anchored: boolean;
  anchorsState: Object;


  constructor(
    private titleService: Title,
    private roamingService: RoamingService,
    private pageEventsService: PageEventsService,
    private layoutEvents: LayoutEventsService
  ) {
    this.rtl = false;
  }

  ngOnInit() {
    this.roaming = this.roamingService.getRoaming();
    this.titleService.setTitle(SITE_NAME_PREFIX + this.roaming.title);
    this.anchorsState = this.roamingService.getAnchorsState();
    this.pageEventsService.setAnchors(this.roaming.anchors);

    this.layoutEvents.getRtl().subscribe((rtl: boolean) => {
      this.rtl = rtl;
    });
  }

}
