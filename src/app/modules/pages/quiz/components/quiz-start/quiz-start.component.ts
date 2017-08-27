import { Component, OnInit, HostBinding } from '@angular/core';

import { Title } from '@angular/platform-browser';
import { SITE_NAME_PREFIX } from '../../../../../shared/_constants/constants';

import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

import { Page } from '../../../../../shared/_models/page.model';
import { QuizService } from '../../services/quiz.service';
import { LayoutEventsService } from '../../../../../shared/_events/layout-events.service';

@Component({
  selector: 'app-quiz-start',
  templateUrl: './quiz-start.component.html',
  styleUrls: ['./quiz-start.component.scss']
})
export class QuizStartComponent implements OnInit {
  @HostBinding('class.rtl') rtl: boolean;

  region;
  quizStart: Page;

  constructor(
    private titleService: Title,
    private router: Router,
    private quizeService: QuizService,
    private layoutEvents: LayoutEventsService
  ) {
    this.rtl = false;
  }

  ngOnInit() {
    this.quizStart = this.quizeService.getQuizStart();
    this.titleService.setTitle(SITE_NAME_PREFIX + this.quizStart.title);

    this.layoutEvents.getRtl().subscribe((rtl: boolean) => {
      this.rtl = rtl;
    });
  }

  startQuiz(region: NgForm) {
    this.region = region;
    this.router.navigate(['/quiz/test']);
  }

}
