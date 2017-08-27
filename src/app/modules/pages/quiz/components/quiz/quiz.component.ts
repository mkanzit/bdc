import { Component, OnInit, HostBinding } from '@angular/core';
import { Title } from '@angular/platform-browser';

import { Page } from '../../../../../shared/_models/page.model';
import { SITE_NAME_PREFIX } from '../../../../../shared/_constants/constants';
import { PageEventsService } from '../../../../../shared/_events/page-events.service';
import { LayoutEventsService } from '../../../../../shared/_events/layout-events.service';

import { BreadcrumbComponent } from '../../../../../components/pages/breadcrumb/breadcrumb.component';
import { MenuAsideComponent } from '../../../../../components/pages/menu-aside/menu-aside.component';

import { QuizService } from '../../services/quiz.service';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.scss']
})
export class QuizComponent implements OnInit {

  @HostBinding('class.rtl') rtl: Boolean;

  quiz: Page;
  anchored: boolean;

  constructor(
    private titleService: Title,
    private quizService: QuizService,
    private pageEventsService: PageEventsService,
    private layoutEvents: LayoutEventsService
  ) {
    this.rtl = false;
  }

  ngOnInit() {
    this.quiz = this.quizService.getQuiz();
    this.titleService.setTitle(SITE_NAME_PREFIX + this.quiz.title);
    this.pageEventsService.setAnchors(this.quiz.anchors);

    this.layoutEvents.getRtl().subscribe((rtl: boolean) => {
      this.rtl = rtl;
    });
  }

}
