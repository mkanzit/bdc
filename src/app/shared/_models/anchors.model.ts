export interface Anchor {
  href: string;
  title: string;
  text: string;
}

export interface AnchorList {
  title: string;
  links: Array<Anchor>;
}
