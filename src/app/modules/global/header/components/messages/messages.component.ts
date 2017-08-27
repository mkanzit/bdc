import { Component, OnInit, HostBinding } from '@angular/core';

import { MessageList } from '../../../../../shared/_models/messages.model';
import { MessagesService } from '../../services/messages.service';
import { LayoutEventsService } from '../../../../../shared/_events/layout-events.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.scss'],
})
export class MessagesComponent implements OnInit {

  @HostBinding('class.rtl') rtl: boolean;
  messages: MessageList;
  csOptions: Object;
  counter: string;

  constructor(
    private messagesService: MessagesService,
    private layoutEvents: LayoutEventsService
  ) {
    this.rtl = false;
    this.csOptions  = {
      axis: 'y',
      autoHideScrollbar: true,
      alwaysShowScrollbar: 0,
      theme: 'minimal-dark',
      mouseWheelPixels: 200,
      autoDraggerLength: false
    };
  }

  ngOnInit() {
    this.messages = this.messagesService.getMessages();

    this.counter = parseInt(this.messages.counter) > 9 ? '9+' : this.messages.counter;


    this.layoutEvents.getRtl().subscribe((rtl: boolean) => {
      this.rtl = rtl;
      this.changeUI(rtl);
    });
  }


  private changeUI(rtl: boolean) {
    if ( rtl === true ) {
      this.messages = this.messagesService.getMessagesArab();
    } else {
      this.messages = this.messagesService.getMessages();
    }
  }

}
