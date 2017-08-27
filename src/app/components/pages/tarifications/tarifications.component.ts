import { Component, OnInit, OnChanges, Input, HostBinding, ViewChild, NgZone } from '@angular/core';
import { LayoutEventsService } from '../../../shared/_events/layout-events.service';
import { OwlCarousel } from 'ngx-owl-carousel';

@Component({
  selector: 'app-tarifications',
  templateUrl: './tarifications.component.html',
  styleUrls: ['./tarifications.component.scss']
})
export class TarificationsComponent implements OnInit, OnChanges {

  @Input() data;
  @ViewChild('owlCarousel') owlCarousel: OwlCarousel;
  @HostBinding('class.rtl') rtl: boolean;
  options: Object;
  gratuite: Object;

  constructor(
    private layoutEvents: LayoutEventsService,
    private zone: NgZone
  ) {
    this.zone = zone;

    this.options = {
      items: 4,
      navigation: false,
      autoWidth: false,
      navText: '',
      rtl: false,
      nav: false,
      dots: true,
      margin: 0,
      responsiveClass: true,
      touchDrag : true,
      responsive: {
        0: {
          items: 1,
        },
        640: {
          items: 2,
        },
        1024: {
          items: 4,
          loop: false
        }
      }
    };

    this.rtl = false;
  }


  ngOnInit() {
    this.gratuit();

    this.layoutEvents.getRtl().subscribe((rtl: boolean) => {
      this.rtl = rtl;
      this.changeUI(rtl);
    });
  }

  ngOnChanges(changes) {
    this.owlCarousel.refresh();
    this.gratuit();
  }


  private gratuit() {
    this.gratuite = this.data.content.filter((item) => {
      return (item.gratuite === true);
    });

    this.gratuite = this.gratuite[0];
  }

  private changeUI(rtl: boolean) {
    if ( rtl === true ) {

      this.options = {
        items: 4,
        navigation: false,
        autoWidth: false,
        navText: '',
        rtl: true,
        nav: false,
        dots: true,
        margin: 0,
        responsiveClass: true,
        responsive: {
          0: {
            items: 1,
          },
          640: {
            items: 2,
          },
          1024: {
            items: 4,
            loop: false
          }
        }
      }

    } else {

      this.options = {
        items: 4,
        navigation: false,
        autoWidth: false,
        navText: '',
        rtl: false,
        nav: false,
        dots: true,
        margin: 0,
        responsiveClass: true,
        responsive: {
          0: {
            items: 1,
          },
          640: {
            items: 2,
          },
          1024: {
            items: 4,
            loop: false
          }
        }
      }

    }
  }

}
