import { Component, OnInit } from '@angular/core';

import { Title } from '@angular/platform-browser';
import { SITE_NAME_PREFIX } from '../../../../../shared/_constants/constants';

import { Page } from '../../../../../shared/_models/page.model';

import { BreadcrumbComponent } from '../../../../../components/pages/breadcrumb/breadcrumb.component';
import { MenuAsideComponent } from '../../../../../components/pages/menu-aside/menu-aside.component';

import { CatalogueService } from '../../services/catalogue.service';


@Component({
  selector: 'app-catalogue',
  templateUrl: './catalogue.component.html',
  styleUrls: ['./catalogue.component.scss']
})
export class CatalogueComponent implements OnInit {

  catalogue: Page;
  anchorsState: Object;


  constructor(
    private titleService: Title,
    private catalogueService: CatalogueService
  ) { }

  ngOnInit() {
    this.catalogue = this.catalogueService.getCatalogue();
    this.titleService.setTitle(SITE_NAME_PREFIX + this.catalogue.title);
    this.anchorsState = this.catalogueService.getAnchorsState();

  }

}
