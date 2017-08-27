import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-faq-filter',
  templateUrl: './faq-filter.component.html',
  styleUrls: ['./faq-filter.component.scss']
})
export class FaqFilterComponent implements OnInit {

  @Input() filter: boolean;

  constructor() { }

  ngOnInit() {
  }

}
