import { Component, OnInit, HostBinding } from '@angular/core';
import { HistoryService } from '../../services/history.service';
import { HistoryList } from '../../../../../shared/_models/history.model';
import { LayoutEventsService } from '../../../../../shared/_events/layout-events.service';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss']
})
export class HistoryComponent implements OnInit {

  @HostBinding('class.rtl') rtl: boolean;
  history: HistoryList;
  csOptions: Object;

  constructor(
    private historyService: HistoryService,
    private layoutEvents: LayoutEventsService
  ) {
    this.history = this.historyService.getHistory();
    this.rtl = false;
    this.csOptions  = {
      axis: 'y',
      autoHideScrollbar: true,
      alwaysShowScrollbar: 0,
      theme: 'minimal-dark'
    };
  }

  ngOnInit() {
    this.layoutEvents.getRtl().subscribe((rtl: boolean) => {
      this.rtl = rtl;
      this.changeUI(rtl);
    });
  }

  private changeUI(rtl: boolean) {
    if ( rtl === true ) {
      this.history = this.historyService.getHistoryArab();
    } else {
      this.history = this.historyService.getHistory();
    }
  }

}
