import { Component, OnInit, Input } from '@angular/core';

import { SitemapService } from '../../../modules/pages/sitemap/services/sitemap.service';
import { Page } from '../../../shared/_models/page.model';

@Component({
  selector: 'app-block-sitemap',
  templateUrl: './block-sitemap.component.html',
  styleUrls: ['./block-sitemap.component.scss']
})
export class BlockSitemapComponent implements OnInit {

  sitemap: Page;
  sections;
  special;
  extra;


  constructor(
    private sitemapService: SitemapService
  ) {
  }

  ngOnInit() {
    this.sitemap = this.sitemapService.getSitemap();

    this.sections = this.sitemap.blocks[0].content.slice(0, -2);
    this.special = this.sitemap.blocks[0].content.slice(-2, -1);
    this.extra = this.sitemap.blocks[0].content.slice(-1);
  }

}
