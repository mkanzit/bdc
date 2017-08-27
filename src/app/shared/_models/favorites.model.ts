export interface Favorite {
  href: string;
  title: string;
  text: string;
}

export interface FavoriteList {
  title: string;
  links: Array<Favorite>;
}
