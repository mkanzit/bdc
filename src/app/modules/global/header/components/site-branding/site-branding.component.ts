import { Component, OnInit, Input, HostBinding } from '@angular/core';
import { CapitalizePipe } from '../../../../../shared/_pipes/capitalize.pipe';
import { LayoutEventsService } from '../../../../../shared/_events/layout-events.service';

@Component({
  selector: 'app-site-branding',
  templateUrl: './site-branding.component.html',
  styleUrls: ['./site-branding.component.scss']
})
export class SiteBrandingComponent implements OnInit {

  @HostBinding('class.rtl') rtl: boolean;
  @Input() site;

  constructor(private layoutEvents: LayoutEventsService) {
    this.rtl = false;
  }

  ngOnInit() {
    this.layoutEvents.getRtl().subscribe((rtl: boolean) => {
      this.rtl = rtl;
    });
  }

}
