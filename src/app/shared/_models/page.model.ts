import { Breadcrumb } from './breadcrumb.model';
import { AnchorList } from './anchors.model';
import { Block } from './block.model';

export interface Page {
  title: String;
  description: string;
  image: {
    src: string;
    alt: string;
    title: string;
  };
  breadcrumb: Breadcrumb;
  anchors?: AnchorList;
  blocks: Array<Block>;
}
