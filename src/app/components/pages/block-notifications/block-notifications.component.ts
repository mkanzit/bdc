import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-block-notifications',
  templateUrl: './block-notifications.component.html',
  styleUrls: ['./block-notifications.component.scss']
})
export class BlockNotificationsComponent implements OnInit {

  @Input() data;

  constructor() { }

  ngOnInit() {
  }

  order(order: string) {
    this.data.content.reverse();
  }

}
