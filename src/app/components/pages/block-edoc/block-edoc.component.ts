import { Component, OnInit, Input, HostBinding } from '@angular/core';
import { LayoutEventsService } from '../../../shared/_events/layout-events.service';

@Component({
  selector: 'app-block-edoc',
  templateUrl: './block-edoc.component.html',
  styleUrls: ['./block-edoc.component.scss']
})


export class BlockEdocComponent implements OnInit {

  @Input() data;
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
