export interface HistoryItem {
  href: string;
  title: string;
  text: string;
}


export interface HistoryList {
  title: string,
  links: Array<HistoryItem>
}
