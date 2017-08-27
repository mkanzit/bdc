import { Component, OnInit, HostBinding } from '@angular/core';
import { slideUp } from '../../../shared/_animations/animations';

import { PageEventsService } from '../../../shared/_events/page-events.service';
import { LayoutEventsService } from '../../../shared/_events/layout-events.service';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.scss'],
  animations: [ slideUp ]
})
export class NotificationsComponent implements OnInit {

  @HostBinding('class.rtl') rtl: Boolean;
  state: string;
  data;
  txt;
  txtAR;

  constructor(
    private pageEventsService: PageEventsService,
    private layoutEvents: LayoutEventsService
  ) {
    this.state = 'in';
    this.rtl = false;

    this.txt = {
      'help': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
      'label': 'Vous avez: ',
      'links': [
        { 'type': 'notifications', 'href': '/notifications', 'title': 'Notifications', 'text': '5 Notifications' },
        { 'type': 'alertes', 'href': '/alerts', 'title': 'Alertes', 'text': '5 Alertes' },
        { 'type': 'quiz', 'href': '/quiz', 'title': 'Quiz', 'text': 'Quiz' },
      ]
    };

    this.txtAR = {
      'help': 'أبجد هوز دولور الجلوس امات ,أبجد هوز دولور الجلوس امات، ',
      'label': 'عندكم: ',
      'links': [
        { 'type': 'notifications', 'href': '#', 'title': 'إخطارات', 'text': '5 إخطارات' },
        { 'type': 'alertes', 'href': '#', 'title': 'التنبيهات', 'text': '5 التنبيهات' },
        { 'type': 'quiz', 'href': '#', 'title': 'مسابقة', 'text': 'مسابقة' },
      ]
    };
  }

  ngOnInit() {
    this.data = this.txt;

    this.layoutEvents.getRtl().subscribe((rtl: boolean) => {
      this.rtl = rtl;

      if ( rtl === true ) {
        this.data = this.txtAR;
      } else {
        this.data = this.txt;
      }
    });
  }

  hide() {
    this.state = 'out';
  }

}
