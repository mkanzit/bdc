import { Component, OnInit, Input, HostBinding } from '@angular/core';
import { LayoutEventsService } from '../../../shared/_events/layout-events.service';

@Component({
  selector: 'app-mobile-4-remontees',
  templateUrl: './mobile-4-remontees.component.html',
  styleUrls: ['./mobile-4-remontees.component.scss']
})
export class Mobile4RemonteesComponent implements OnInit {

  @Input() data;
  @Input() grid: string;
  @HostBinding('class.rtl') rtl: boolean;

  layout = 'grid-4-tiny-1 items-mobile';

  constructor(
    private layoutEvents: LayoutEventsService
  ) {
    this.rtl = false;
  }

  ngOnInit() {
    this.layout = this.grid ? this.grid : 'grid-4-tiny-1 items-mobile';

    this.layoutEvents.getRtl().subscribe((rtl: boolean) => {
      this.rtl = rtl;
    });
  }

}
