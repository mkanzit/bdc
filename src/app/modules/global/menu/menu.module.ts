import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { MenuComponent } from './menu/menu.component';
import { MenuItemComponent } from './menu-item/menu-item.component';
import { SubmenuComponent } from './submenu/submenu.component';
import { MenuextraComponent } from './menuextra/menuextra.component';

import { AccordionComponent } from '../../../shared/_ui/accordion/accordion.component';

import { LayoutEventsService } from '../../../shared/_events/layout-events.service';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    NgbModule.forRoot()
  ],
  declarations: [
    MenuComponent,
    SubmenuComponent,
    MenuextraComponent,
    AccordionComponent,
    MenuItemComponent,
  ],
  providers: [
    LayoutEventsService
  ],
  exports: [MenuComponent]
})
export class MenuModule { }
