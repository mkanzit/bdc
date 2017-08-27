import { Component, OnInit } from '@angular/core';

import { FaqService } from '../../../modules/pages/faq/services/faq.service';

@Component({
  selector: 'app-top-faq',
  templateUrl: './top-faq.component.html',
  styleUrls: ['./top-faq.component.scss']
})
export class TopFaqComponent implements OnInit {

  topFAQ: Array<Object>;

  constructor(
    private faqService: FaqService
  ) { }

  ngOnInit() {
    this.topFAQ = this.faqService.getTopFAQ(5);
  }

}
