export interface BreadcrumbItem {
  href: string;
  title: string;
  text: string;
}

export interface Breadcrumb {
  blocktype: string;
  blockdata: Array<BreadcrumbItem>
}
