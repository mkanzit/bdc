import { Component, OnInit, Input, HostBinding } from '@angular/core';
import { LayoutEventsService } from '../../../shared/_events/layout-events.service';

@Component({
  selector: 'app-orange-care',
  templateUrl: './orange-care.component.html',
  styleUrls: ['./orange-care.component.scss']
})
export class OrangeCareComponent implements OnInit {

  @HostBinding('class.rtl') rtl: boolean;
  @Input() data;

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
