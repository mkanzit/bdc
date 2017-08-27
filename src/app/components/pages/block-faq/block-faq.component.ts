import { Component, OnInit, Input, HostBinding } from '@angular/core';
import { LayoutEventsService } from '../../../shared/_events/layout-events.service';

@Component({
  selector: 'app-block-faq',
  templateUrl: './block-faq.component.html',
  styleUrls: ['./block-faq.component.scss']
})
export class BlockFaqComponent implements OnInit {

  @Input() data: Object;
  @Input() filter: boolean;
  @HostBinding('class.rtl') rtl: boolean;

  constructor(
    private layoutEvents: LayoutEventsService
  ) {
    this.rtl = false;
  }

  ngOnInit() {
    this.layoutEvents.getRtl().subscribe((rtl: boolean) => {
      this.rtl = rtl;
    });
  }

}
