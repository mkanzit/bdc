import { Component, OnInit } from '@angular/core';

import { NewsService } from '../../../modules/pages/news/services/news.service';

@Component({
  selector: 'app-top-news',
  templateUrl: './top-news.component.html',
  styleUrls: ['./top-news.component.scss']
})
export class TopNewsComponent implements OnInit {

  title: string;
  latestNews: Array<Object>;

  constructor(
    private newsService: NewsService
  ) { }

  ngOnInit() {
    this.title = this.newsService.getTitle();
    this.latestNews = this.newsService.getLatestNews(3);
  }

}
