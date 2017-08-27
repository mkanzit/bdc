import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-process-detail-filter',
  templateUrl: './process-detail-filter.component.html',
  styleUrls: ['./process-detail-filter.component.scss']
})
export class ProcessDetailFilterComponent implements OnInit {

  @Input() option: Object;

  constructor() { }

  ngOnInit() { }

}
