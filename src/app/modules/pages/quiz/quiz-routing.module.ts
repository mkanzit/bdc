import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { QuizComponent } from './components/quiz/quiz.component';
import { QuizStartComponent } from './components/quiz-start/quiz-start.component';
import { QuizTestComponent } from './components/quiz-test/quiz-test.component';
import { QuizScoreComponent } from './components/quiz-score/quiz-score.component';


const quizRoutes: Routes = [
  {
    path: 'quiz',
    component: QuizComponent,
    children: [
      { path: '', redirectTo: 'start', pathMatch: 'full' },
      { path: 'start', component: QuizStartComponent },
      { path: 'test', component: QuizTestComponent },
      { path: 'score', component: QuizScoreComponent }
    ]
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(quizRoutes)
  ],
  exports: [
    RouterModule,
  ]
})

export class QuizRoutingModule { }
