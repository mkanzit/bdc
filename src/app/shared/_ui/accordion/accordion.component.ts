import { Component, OnInit, Input, HostBinding } from '@angular/core';
import { LayoutEventsService } from '../../_events/layout-events.service';

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.scss']
})
export class AccordionComponent implements OnInit {

  @HostBinding('class.rtl') rtl: boolean;
  @Input() data;

  constructor(private layoutEvents: LayoutEventsService) {
    this.rtl = false;
  }

  ngOnInit() {
    this.layoutEvents.getRtl().subscribe((rtl: boolean) => {
      this.rtl = rtl;
    });
  }
}
