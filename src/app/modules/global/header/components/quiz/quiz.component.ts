import { Component, OnInit } from '@angular/core';
import { QuizService } from '../../services/quiz.service';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.scss']
})
export class QuizComponent implements OnInit {

  quiz: boolean;

  constructor(private quizService: QuizService) { }

  ngOnInit() {
    this.quiz = this.quizService.haveQuiz();
  }

}
