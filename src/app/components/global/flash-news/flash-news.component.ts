import {
  Component,
  OnInit,
  OnChanges,
  Input,
  ViewChild,
  HostBinding,
  Renderer2,
  ElementRef,
  ChangeDetectorRef } from '@angular/core';
import { FlashNewsService } from '../../../shared/_services/flash-news.service';

import { OwlCarousel } from 'ngx-owl-carousel';
import { LayoutEventsService } from '../../../shared/_events/layout-events.service';
import { FlashItem } from '../../../shared/_models/flash-item.model';

@Component({
  selector: 'app-flash-news',
  templateUrl: './flash-news.component.html',
  styleUrls: ['./flash-news.component.scss'],
})
export class FlashNewsComponent implements OnInit, OnChanges {

  @HostBinding('class.collapsed') collapsed: boolean;
  @HostBinding('class.rtl') rtl: boolean;

  flashNews: Array<FlashItem>;
  options: Object;
  label: string;
  @ViewChild('owlCarousel') owlCarousel: OwlCarousel

  constructor(
    private flashNewsService: FlashNewsService,
    private layoutEvents: LayoutEventsService,
    private renderer: Renderer2,
    private el: ElementRef
  ) {

    this.collapsed = false;
    this.rtl = false;
    this.label = 'Flash News';

    this.options = {
      items: 4,
      loop: true,
      dots: false,
      navigation: false,
      navText: '',
      rtl: false,
      responsiveClass: true,
      responsive: {
        0: { items: 1, autoWidth: true, },
        1200: { items: 2, autoWidth: false, },
        1440: { items: 3, autoWidth: false, },
      }
    };
  }

  ngOnInit() {
    this.flashNews = this.flashNewsService.getFlashNews();
    this.layoutEvents.getRtl().subscribe((rtl: boolean) => {
      this.rtl = rtl;
      this.changeUI(rtl);
    });
  }


  ngOnChanges() {
    this.owlCarousel.refresh();
  }

  next() {
    this.owlCarousel.next([400])
  }

  collapse($event) {
    $event.stopPropagation();

    this.collapsed = (this.collapsed === false) ? true : false;
    const footer = this.renderer.parentNode(this.el.nativeElement);

    if ( this.collapsed ) {
      this.renderer.addClass(footer, 'collapsed');
    } else {
      this.renderer.removeClass(footer, 'collapsed');
    }
  }


  private changeUI(rtl: boolean) {
    if ( rtl === true ) {

      this.flashNews = this.flashNewsService.getFlashNewsArab();
      this.options = {
        items: 4,
        loop: true,
        dots: false,
        navigation: false,
        navText: '',
        rtl: true,
        responsiveClass: true,
        responsive: {
          0: { items: 1, autoWidth: true, },
          1200: { items: 2, autoWidth: false, },
          1440: { items: 3, autoWidth: false, },
        }
      };
      this.label = 'خبر عاجل';

    } else {

      this.flashNews = this.flashNewsService.getFlashNews();
      this.options = {
        items: 4,
        loop: true,
        dots: false,
        navigation: false,
        navText: '',
        rtl: false,
        responsiveClass: true,
        responsive: {
          0: { items: 1, autoWidth: true, },
          1200: { items: 2, autoWidth: false, },
          1440: { items: 3, autoWidth: false, },
        }
      };
      this.label = 'Flash News';

    }
  }

}
