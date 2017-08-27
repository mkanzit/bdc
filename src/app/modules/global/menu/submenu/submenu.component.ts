import { Component, OnInit, Input, Output, EventEmitter, HostBinding, ChangeDetectorRef, ChangeDetectionStrategy } from '@angular/core';
import { AccordionComponent } from '../../../../shared/_ui/accordion/accordion.component';
import { LayoutEventsService } from '../../../../shared/_events/layout-events.service';

@Component({
  selector: 'app-submenu',
  templateUrl: './submenu.component.html',
  styleUrls: ['./submenu.component.scss'],
})
export class SubmenuComponent implements OnInit {

  @HostBinding('class.active') active: boolean;
  @HostBinding('class.rtl') rtl: boolean;
  @Input() menu;
  @Input() title;
  @Output() collapse = new EventEmitter<boolean>();

  constructor(private layoutEvents: LayoutEventsService) {
    this.active = false;
    this.rtl = false;
  }

  ngOnInit() {
    this.layoutEvents.getRtl().subscribe((rtl: boolean) => {
      this.rtl = rtl;
    });

    console.log(this.title);
  }

  show() {
    this.active = true;
  }

  hide($event): any {
    $event.stopPropagation();

    this.active = false;
    this.collapse.emit(false);
  }

}
