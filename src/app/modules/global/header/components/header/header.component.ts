import { Component, OnInit, Input, ViewChild, HostBinding } from '@angular/core';
import { StateService } from '../../../../../shared/_services/state.service';
import { AnchorList } from '../../../../../shared/_models/anchors.model';
import { PageEventsService } from '../../../../../shared/_events/page-events.service';
import { LayoutEventsService } from '../../../../../shared/_events/layout-events.service'
import { SiteBranding } from '../../../../../shared/_models/sitebranding.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @ViewChild('siteBranding') sitebranding;
  @HostBinding('class.rtl') rtl = false; // UI Language state

  @Input() site: SiteBranding;
  anchors: AnchorList;

  constructor(
    private stateService: StateService,
    private pageService: PageEventsService,
    private layoutEvents: LayoutEventsService
  ) {

    this.anchors = {
      'title': '',
      'links': []
    }
  }

  ngOnInit() {
    this.pageService.getAnchors().subscribe((anchors: AnchorList) => {
      this.anchors = anchors;
    });

    this.layoutEvents.getRtl().subscribe((rtl: boolean) => {
      this.rtl = rtl;
    });
  }



}
