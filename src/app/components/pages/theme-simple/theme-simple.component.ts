import { Component, OnInit, Input, HostBinding } from '@angular/core';
import { LayoutEventsService } from '../../../shared/_events/layout-events.service';

@Component({
  selector: 'app-theme-simple',
  templateUrl: './theme-simple.component.html',
  styleUrls: ['./theme-simple.component.scss']
})

export class ThemeSimpleComponent implements OnInit {

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
