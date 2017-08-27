import { Component, OnInit, Input, HostBinding } from '@angular/core';
import { LayoutEventsService } from '../../../shared/_events/layout-events.service';

@Component({
  selector: 'app-simple-text-illustration',
  templateUrl: './simple-text-illustration.component.html',
  styleUrls: ['./simple-text-illustration.component.scss']
})
export class SimpleTextIllustrationComponent implements OnInit {

  @Input() data;
  @HostBinding('class.rtl') rtl: boolean;
  cta: number;
  twocol: boolean;

  constructor(
    private layoutEvents: LayoutEventsService
  ) {
    this.rtl = false;
    this.twocol = false;
  }

  ngOnInit() {
    this.cta = this.data.content[0].cta.length;

    this.layoutEvents.getRtl().subscribe((rtl: boolean) => {
      this.rtl = rtl;
    });

    this.twocol = Boolean(this.data.content.length >= 2);
  }

}
