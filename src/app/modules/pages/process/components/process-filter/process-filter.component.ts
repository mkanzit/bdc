import { Component, OnInit, Input,HostBinding } from '@angular/core';
import { LayoutEventsService } from '../../../../../shared/_events/layout-events.service';


@Component({
  selector: 'app-process-filter',
  templateUrl: './process-filter.component.html',
  styleUrls: ['./process-filter.component.scss']
})
export class ProcessFilterComponent implements OnInit {

  @Input() option: Object;
  @HostBinding('class.rtl') rtl: boolean;
  label: string;

  constructor(
    private layoutEvents: LayoutEventsService
  ) {
    this.rtl = false;
    this.label = 'Chercher';
  }

  ngOnInit() {
    this.layoutEvents.getRtl().subscribe((rtl: boolean) => {
      this.rtl = rtl;
      this.changeUI(rtl);
    });
  }

  private changeUI(rtl: boolean) {
    this.label = rtl ? 'بحث' : 'Chercher';
  }

}
