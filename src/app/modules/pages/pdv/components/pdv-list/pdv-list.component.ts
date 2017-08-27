import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pdv-list',
  templateUrl: './pdv-list.component.html',
  styleUrls: ['./pdv-list.component.scss']
})
export class PdvListComponent implements OnInit {

  nsOptions: Object;

  constructor() {
    this.nsOptions = {
      autohidemode: false,
      background: '#eee',
      cursorcolor: '#424242',
      cursorborderradius: 0,
      cursorwidth: '9px',
      cursorborder: 0
    }
  }

  ngOnInit() {
  }

  generate(items: number) {
    const l = [];

    for (let i = 0 ; i < items ; i++) {
      l[i] = i;
    }

    return l;
  }

}
