import { Injectable } from '@angular/core';

@Injectable()
export class QuizService {

  quiz: boolean;

  constructor() {
    this.quiz = false;
  }

  haveQuiz() {
    return this.quiz;
  }

}
