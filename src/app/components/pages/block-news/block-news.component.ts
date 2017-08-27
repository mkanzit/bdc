import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-block-news',
  templateUrl: './block-news.component.html',
  styleUrls: ['./block-news.component.scss']
})
export class BlockNewsComponent implements OnInit {

  @Input() data;
  select: string;

  constructor() { }

  ngOnInit() {
  }

  order(order: string) {
    this.data.content.reverse();
  }

}
