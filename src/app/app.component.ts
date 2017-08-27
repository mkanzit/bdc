import { Component, Inject, OnInit, HostBinding, Renderer2 } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';

import { ProfilerComponent } from './components/global/profiler/profiler.component';
import { LangSwitcherComponent } from './components/global/lang-switcher/lang-switcher.component';

import { StateService } from './shared/_services/state.service';
import { LayoutEventsService } from './shared/_events/layout-events.service'
import { State } from './shared/_models/state.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})

export class AppComponent implements OnInit {

  @HostBinding('class.rtl') rtl = false; // UI Language state

  state: State;       // Global data
  navTree;            // Navigation Trees
  profile: string;    // User profile
  waiting: boolean;   // Page loading state
  expended: boolean;  // Menu state
  csMenu: Object;     // Scroll options
  csContent: Object;  // Scroll options

  constructor(
    private stateService: StateService,
    private layoutEvents: LayoutEventsService,
    private renderer: Renderer2,
    @Inject(DOCUMENT) private document: any
  ) {
    this.profile   = 'b2c';
    this.waiting   = false;
    this.expended  = false;

    this.csMenu = {
      axis: 'y',
      autoHideScrollbar: true,
      alwaysShowScrollbar: 0,
      theme: 'dark-thin',
      mouseWheelPixels: 400,
      autoDraggerLength: false
    };

    this.csContent = {
      axis: 'y',
      autoHideScrollbar: true,
      alwaysShowScrollbar: 0,
      theme: 'minimal-dark',
      mouseWheelPixels: 400,
      autoDraggerLength: false
    };
  }

  ngOnInit() {
    this.state = this.stateService.getState();
    this.navTree = this.stateService.getNavigationTree();

    this.layoutEvents.getExpended().subscribe((expended: boolean) => {
      this.expended = expended;
    });

    this.layoutEvents.getRtl().subscribe((rtl: boolean) => {
      this.rtl = rtl;
      this.changeUI(rtl);
    });
  }

  private changeUI(rtl: boolean) {
    if ( rtl === true ) {
      this.state = this.stateService.getStateArab();
      this.layoutEvents.setExpended(false);
      // this.renderer.addClass(document.querySelector('.selectBox-dropdown-menu'), 'rtl');
    } else {
      this.state = this.stateService.getState();
      // this.renderer.removeClass(document.querySelector('.selectBox-dropdown-menu'), 'rtl');
    }
  }
}
