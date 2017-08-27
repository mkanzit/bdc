import { Component, OnInit, Input, HostBinding } from '@angular/core';
import { LayoutEventsService } from '../../../shared/_events/layout-events.service';

@Component({
  selector: 'favorites-item',
  templateUrl: './favorites-item.component.html',
  styleUrls: ['./favorites-item.component.scss']
})
export class FavoritesItemComponent implements OnInit {

  @Input() data;
  @HostBinding('class.rtl') rtl: boolean;
  cta: number;
  selected: number;

  constructor(
    private layoutEvents: LayoutEventsService
  ) {
    this.rtl = false;
  }

  ngOnInit() {
    this.cta = this.data.content;

    this.layoutEvents.getRtl().subscribe((rtl: boolean) => {
      this.rtl = rtl;
    });
  }
  
  toggle(index: number){
    this.selected = this.selected === index ? 9999 : index;
  }
}
