import { Component, ViewChildren, QueryList, OnInit, AfterViewInit, Input } from '@angular/core';

import { MenuItemComponent } from '../menu-item/menu-item.component';
import { MenuextraComponent } from '../menuextra/menuextra.component';

import { Menu } from '../../../../shared/_models/menu.model'
import { MenuExtra } from '../../../../shared/_models/menu-extra.model';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  @Input() menu: Menu;
  @Input() menuextra: MenuExtra;

  constructor() {
  }

  ngOnInit() {
  }

}
