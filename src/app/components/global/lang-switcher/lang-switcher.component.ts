import { Component, OnInit } from '@angular/core';
import { LayoutEventsService } from '../../../shared/_events/layout-events.service';

@Component({
  selector: 'app-lang-switcher',
  templateUrl: './lang-switcher.component.html',
  styleUrls: ['./lang-switcher.component.scss']
})
export class LangSwitcherComponent implements OnInit {

  rtl: boolean;

  constructor(private layoutEventsService: LayoutEventsService) {
    this.rtl = false;  // UI Language state
  }

  ngOnInit() {
    this.layoutEventsService.getRtl().subscribe((rtl: boolean) => { this.rtl = rtl });
  }

  switchLang(rtl: boolean) {
    this.rtl = rtl;
    this.layoutEventsService.setRtl(this.rtl);

    if ( this.rtl === true ) {
      setTimeout(() => {
        this.layoutEventsService.setRtl(this.rtl);
      }, 1000);
    }
  }
}
