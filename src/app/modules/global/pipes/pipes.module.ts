import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CapitalizePipe } from '../../../shared/_pipes/capitalize.pipe';
import { ClassPipe } from '../../../shared/_pipes/class.pipe';
import { SafeUrlPipe } from '../../../shared/_pipes/safe-url.pipe';
import { UrlPipe } from '../../../shared/_pipes/url.pipe';


@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    CapitalizePipe,
    ClassPipe,
    SafeUrlPipe,
    UrlPipe
  ],
  declarations: [
    CapitalizePipe,
    ClassPipe,
    SafeUrlPipe,
    UrlPipe
  ]
})
export class PipesModule {
  static forRoot() {
      return {
          ngModule: PipesModule,
          providers: [],
      };
  }
}
