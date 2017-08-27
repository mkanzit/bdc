import { Component, OnInit, HostBinding } from '@angular/core';

import { Title } from '@angular/platform-browser';
import { SITE_NAME_PREFIX } from '../../../../../shared/_constants/constants';

import { Page } from '../../../../../shared/_models/page.model';
import { ScriptingService } from '../../service/scripting.service';
import { PageEventsService } from '../../../../../shared/_events/page-events.service';
import { LayoutEventsService } from '../../../../../shared/_events/layout-events.service';

import { BreadcrumbComponent } from '../../../../../components/pages/breadcrumb/breadcrumb.component';
import { MenuAsideComponent } from '../../../../../components/pages/menu-aside/menu-aside.component';


@Component({
  selector: 'app-script',
  templateUrl: './script.component.html',
  styleUrls: ['./script.component.scss']
})
export class ScriptComponent implements OnInit {
  @HostBinding('class.rtl') rtl: boolean;

  scripts: Page;
  anchorsState: Object;


  constructor(
    private titleService: Title,
    private scriptingService: ScriptingService,
    private pageEventsService: PageEventsService,
    private layoutEvents: LayoutEventsService
  ) {
    this.rtl = false;
  }

  ngOnInit() {
    this.scripts = this.scriptingService.getScripts();
    this.titleService.setTitle(SITE_NAME_PREFIX + this.scripts.title);
    this.anchorsState = this.scriptingService.getAnchorsState();
    this.pageEventsService.setAnchors(this.scripts.anchors);

    this.layoutEvents.getRtl().subscribe((rtl: boolean) => {
      this.rtl = rtl;
    });
  }

}
