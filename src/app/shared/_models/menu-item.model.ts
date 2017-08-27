import { SubMenu } from './submenu.model';

export interface MenuItem {
  title: string;
  icon: string;
  target: string;
  submenu: SubMenu;
}
