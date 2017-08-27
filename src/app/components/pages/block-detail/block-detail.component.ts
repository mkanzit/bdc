import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-block-detail',
  templateUrl: './block-detail.component.html',
  styleUrls: ['./block-detail.component.scss']
})
export class BlockDetailComponent implements OnInit {

  @Input() data: Object;

  constructor() {}

  ngOnInit() {
  }

}
