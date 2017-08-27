import { Component, OnInit, Input, HostBinding } from '@angular/core';
import { Router } from '@angular/router';

import { LayoutEventsService } from '../../../../../shared/_events/layout-events.service';

@Component({
  selector: 'app-user-account',
  templateUrl: './user-account.component.html',
  styleUrls: ['./user-account.component.scss']
})
export class UserAccountComponent implements OnInit {

  @HostBinding('class.rtl') rtl: boolean;
  @Input() user: string;

  constructor(
    private layoutEvents: LayoutEventsService,
    private router: Router
  ) {
    this.rtl = false;
  }

  ngOnInit() {
    this.layoutEvents.getRtl().subscribe((rtl) => {
      this.rtl = rtl;
    });
  }

  logout() {
    this.router.navigate(['/login']);
  }

}
