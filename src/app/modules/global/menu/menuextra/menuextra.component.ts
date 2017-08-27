import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-menuextra',
  templateUrl: './menuextra.component.html',
  styleUrls: ['./menuextra.component.scss'],
})
export class MenuextraComponent implements OnInit {

  @Input() menu;

  constructor() { }

  ngOnInit() {
  }
}
