import { Component, OnInit, ViewChild, HostBinding } from '@angular/core';

import { Title } from '@angular/platform-browser';
import { SITE_NAME_PREFIX } from '../../../../../shared/_constants/constants';

import { Page } from '../../../../../shared/_models/page.model';
import { QuizService } from '../../services/quiz.service';
import { LayoutEventsService } from '../../../../../shared/_events/layout-events.service';


@Component({
  selector: 'app-quiz-score',
  templateUrl: './quiz-score.component.html',
  styleUrls: ['./quiz-score.component.scss']
})
export class QuizScoreComponent implements OnInit {
  @HostBinding('class.rtl') rtl: boolean;

  @ViewChild('score') score;

  quizScore: Page;

  constructor(
    private titleService: Title,
    private quizeService: QuizService,
    private layoutEvents: LayoutEventsService
  ) {
    this.rtl = false;
  }

  ngOnInit() {
    this.quizScore = this.quizeService.getQuizScore();
    this.score.animate();
    this.titleService.setTitle(SITE_NAME_PREFIX + this.quizScore.title);

    this.layoutEvents.getRtl().subscribe((rtl: boolean) => {
      this.rtl = rtl;
    });
  }

}
