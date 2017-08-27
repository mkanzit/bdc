import { Component, OnInit , HostBinding} from '@angular/core';
import { Router , NavigationEnd } from '@angular/router';

import { Page } from '../../../../../shared/_models/page.model';
import { ProcessService } from '../../services/process.service';
import { PageEventsService } from '../../../../../shared/_events/page-events.service';
import { LayoutEventsService } from '../../../../../shared/_events/layout-events.service';

import { Title } from '@angular/platform-browser';
import { SITE_NAME_PREFIX } from '../../../../../shared/_constants/constants';

@Component({
  selector: 'app-process-detail',
  templateUrl: './process-detail.component.html',
  styleUrls: ['./process-detail.component.scss']
})
export class ProcessDetailComponent implements OnInit {

  @HostBinding('class.rtl') rtl: boolean;

  processDetails: Page;
  anchored: boolean;
  anchorsState: Object;

  constructor(
    private router: Router,
    private titleService: Title,
    private processService: ProcessService,
    private pageEventsService: PageEventsService,
    private layoutEvents: LayoutEventsService
  ) {
    this.rtl = false;
  
    router.events.subscribe(s => {
      if (s instanceof NavigationEnd) {
        const tree = router.parseUrl(router.url);
        if (tree.fragment) {
          const element = document.querySelector('#' + tree.fragment);
          if (element) { element.scrollIntoView(true); }
        }
      }
    });
  }

  ngOnInit() {
    this.processDetails = this.processService.getProcessDetails();
    this.titleService.setTitle(SITE_NAME_PREFIX + this.processDetails.title);
    this.anchorsState = this.processService.getAnchorsState();
    this.pageEventsService.setAnchors(this.processDetails.anchors);
    
    this.layoutEvents.getRtl().subscribe((rtl: boolean) => {
      this.rtl = rtl;
    });
  }

  goTo($event, location: number): void {
    $event.preventDefault();
    this.router.navigate(['/process/details'], { fragment: location + '' });
  }
}

