// Modules
import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';

// Components
import { SearchComponent } from './components/search/search.component';

// Services
import { SearchService } from './services/search.service';

@NgModule({
  imports: [
    SharedModule
  ],
  exports: [
    SearchComponent
  ],
  declarations: [
    SearchComponent
  ],
  providers: [
    SearchService
  ]
})
export class SearchModule { }
