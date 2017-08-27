import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-block-alerts',
  templateUrl: './block-alerts.component.html',
  styleUrls: ['./block-alerts.component.scss']
})
export class BlockAlertsComponent implements OnInit {

  @Input() data;

  constructor() { }

  ngOnInit() {
  }

  order(order: string) {
    this.data.content.reverse();
  }

}
