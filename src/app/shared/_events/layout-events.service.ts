import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class LayoutEventsService {

  // Expended layout
  private expended: boolean;
  private isExpended: Subject<boolean> = new Subject<boolean>();

  // Active menu
  private activeIndex: number;
  private isActivated: Subject<number> = new Subject<number>();


  // Rtl layout
  private rtl: boolean = false;
  private isRtl: Subject<boolean> = new Subject<boolean>();



  // Expended layout events
  setExpended(expended: boolean) {
    this.expended = expended;
    this.isExpended.next(expended);
  }

  getExpended(): Observable<boolean> {
    return this.isExpended.asObservable();
  }


  // Active menu events
  setActiveIndex(index: number) {
    this.activeIndex = index;
    this.isActivated.next(index);
  }

  getActiveIndex() {
    return this.isActivated.asObservable();
  }


  // Rtl layout events
  setRtl(rtl: boolean) {
    this.rtl = rtl;
    this.isRtl.next(rtl);
  }

  getRtl() {
    return this.isRtl.asObservable();
  }

  hasRtl() {
    return this.rtl;
  }
}
