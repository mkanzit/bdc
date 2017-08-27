import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-edoc-detail-filter',
  templateUrl: './edoc-detail-filter.component.html',
  styleUrls: ['./edoc-detail-filter.component.scss']
})
export class EdocDetailFilterComponent implements OnInit {

  @Input() option: Object;

  constructor() { }

  ngOnInit() { }

}
