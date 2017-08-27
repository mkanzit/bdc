import { Component, OnInit, Input,HostBinding } from '@angular/core';
import { LayoutEventsService } from '../../../../../shared/_events/layout-events.service';


@Component({
  selector: 'app-favorites-filter',
  templateUrl: './favorites-filter.component.html',
  styleUrls: ['./favorites-filter.component.scss']
})
export class FavoritesFilterComponent implements OnInit {

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
