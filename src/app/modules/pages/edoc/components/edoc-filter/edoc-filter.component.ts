import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-edoc-filter',
  templateUrl: './edoc-filter.component.html',
  styleUrls: ['./edoc-filter.component.scss']
})
export class EdocFilterComponent implements OnInit {

  @Input() option: Object;

  constructor() { }

  ngOnInit() { }

}
