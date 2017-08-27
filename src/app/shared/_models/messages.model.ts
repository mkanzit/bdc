export interface Message {
  href: string;
  title: string;
  text: string;
}

export interface MessageList {
  title: string;
  counter: string;
  links: Array<Message>;
}
