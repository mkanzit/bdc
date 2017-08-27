import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-block-flash-news',
  templateUrl: './block-flash-news.component.html',
  styleUrls: ['./block-flash-news.component.scss']
})
export class BlockFlashNewsComponent implements OnInit {

  @Input() data;

  constructor() { }

  ngOnInit() {
  }

  order(order: string) {
    this.data.content.reverse();
  }

}
