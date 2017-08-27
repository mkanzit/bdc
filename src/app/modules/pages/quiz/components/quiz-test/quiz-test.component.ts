import { Component, OnInit, ViewChild, HostBinding } from '@angular/core';
import { CircleProgressComponent } from '../../../../../components/pages/circle-progress/circle-progress.component';

import { Title } from '@angular/platform-browser';
import { SITE_NAME_PREFIX } from '../../../../../shared/_constants/constants';

import { Page } from '../../../../../shared/_models/page.model';
import { QuizService } from '../../services/quiz.service';
import { LayoutEventsService } from '../../../../../shared/_events/layout-events.service';
import { PageEventsService } from '../../../../../shared/_events/page-events.service';



@Component({
  selector: 'app-quiz-test',
  templateUrl: './quiz-test.component.html',
  styleUrls: ['./quiz-test.component.scss']
})
export class QuizTestComponent implements OnInit {
  @HostBinding('class.rtl') rtl: boolean;

  @ViewChild('score') score;
  quizTest: Page;

  constructor(
    private titleService: Title,
    private quizeService: QuizService,
    private layoutEvents: LayoutEventsService,
    private pageEventsService: PageEventsService
  ) {
    this.rtl = false;
  }

  ngOnInit() {
    this.quizTest = this.quizeService.getQuizTest();
    this.titleService.setTitle(SITE_NAME_PREFIX + this.quizTest.title);
    this.pageEventsService.setAnchors(this.quizTest.anchors);
    this.score.animate();

    this.layoutEvents.getRtl().subscribe((rtl: boolean) => {
      this.rtl = rtl;
    });
  }

}
