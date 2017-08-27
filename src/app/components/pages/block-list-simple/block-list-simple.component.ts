import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-block-list-simple',
  templateUrl: './block-list-simple.component.html',
  styleUrls: ['./block-list-simple.component.scss']
})
export class BlockListSimpleComponent implements OnInit {

  @Input() data: Object;

  constructor() { }

  ngOnInit() {
  }

}
