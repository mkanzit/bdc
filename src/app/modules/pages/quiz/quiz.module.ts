// Modules
import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { QuizRoutingModule } from './quiz-routing.module';

// Components
import { QuizComponent } from './components/quiz/quiz.component';
import { QuizStartComponent } from './components/quiz-start/quiz-start.component';
import { QuizScoreComponent } from './components/quiz-score/quiz-score.component';
import { QuizTestComponent } from './components/quiz-test/quiz-test.component';

// Services
import { QuizService } from './services/quiz.service';

@NgModule({
  imports: [
    SharedModule,
    QuizRoutingModule
  ],
  exports: [
    QuizRoutingModule
  ],
  declarations: [
    QuizComponent,
    QuizStartComponent,
    QuizScoreComponent,
    QuizTestComponent
  ],
  providers: [
    QuizService
  ]
})
export class QuizModule { }
