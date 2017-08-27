import { Component, OnInit, Input, HostBinding } from '@angular/core';
import { LayoutEventsService } from '../../../shared/_events/layout-events.service';

@Component({
  selector: 'app-online-editor',
  templateUrl: './online-editor.component.html',
  styleUrls: ['./online-editor.component.scss']
})
export class OnlineEditorComponent implements OnInit {

  @Input() data;
  @HostBinding('class.rtl') rtl: boolean;
  src: string;

  constructor(
    private layoutEvents: LayoutEventsService
  ) { }

  ngOnInit() {
    this.layoutEvents.getRtl().subscribe((rtl: boolean) => {
      this.rtl = rtl;
    });
  }
}
