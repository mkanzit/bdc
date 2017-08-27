import { Component, OnInit, Input, ViewChild, HostBinding } from '@angular/core';

import { SubmenuComponent } from '../submenu/submenu.component';
import { slideLeft } from '../../../../shared/_animations/animations';
import { LayoutEventsService } from '../../../../shared/_events/layout-events.service';

@Component({
  selector: 'app-menu-item',
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.scss'],
  // animations: [ slideLeft ]
})
export class MenuItemComponent implements OnInit {

  @ViewChild('submenu') submenu;
  @HostBinding('class.rtl') rtl: boolean;
  @Input() item;
  @Input() index;
  active: boolean;
  expended: boolean;
  state: string;

  constructor(private layoutEvents: LayoutEventsService) {
    this.active   = false;
    this.expended = false;
    this.rtl = false;
    this.state = 'out';
  }

  ngOnInit() {
    this.layoutEvents.getActiveIndex().subscribe((selected: number) => {
      this.active = (this.index === selected);
      this.submenu.active = this.active;
    });

    this.layoutEvents.getRtl().subscribe((rtl: boolean) => {
      this.rtl = rtl;
    });

    this.animate();
  }

  onSelect() {
    this.active = this.expended = true;

    this.submenu.show();

    this.layoutEvents.setExpended(this.expended);
    this.layoutEvents.setActiveIndex(this.index);
  }

  onCollapse($event: boolean) {
    this.active = this.expended = $event;

    this.layoutEvents.setExpended(this.expended);
    this.layoutEvents.setActiveIndex(9999);
    this.active = this.expended = $event;
  }

  animate() {
    setTimeout(() => {
      this.state = 'in';
    });
  }

}
