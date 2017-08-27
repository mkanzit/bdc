import { SiteBranding } from './sitebranding.model';
import { Menu } from './menu.model';
import { MenuExtra } from './menu-extra.model';

export interface State {
  site: SiteBranding;
  menu: Menu;
  menuextra: MenuExtra;
}
