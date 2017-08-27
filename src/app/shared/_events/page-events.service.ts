import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';
import { AnchorList } from '../_models/anchors.model';

@Injectable()
export class PageEventsService {
  // Expended layout
  private anchored: boolean;
  private anchors: AnchorList;

  private isAnchored: Subject<boolean> = new Subject<boolean>();
  private anchorsList: Subject<AnchorList> = new Subject<AnchorList>();

  isPageAnchored(): Observable<boolean> {
    return this.isAnchored.asObservable();
  }

  setAnchors(anchors: AnchorList) {
    this.anchors = anchors;
    this.anchorsList.next(anchors);
  }

  getAnchors(): Observable<AnchorList> {
    return this.anchorsList.asObservable();
  }
}
