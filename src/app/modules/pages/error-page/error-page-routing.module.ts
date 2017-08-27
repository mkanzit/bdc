import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ErrorPageComponent } from './components/error-page/error-page.component';

const ErrorPageRoutes: Routes = [
  { path: 'error-page', component: ErrorPageComponent },
];

@NgModule({
  imports: [
    RouterModule.forChild(ErrorPageRoutes)
  ],
  exports: [
    RouterModule,
  ]
})

export class ErrorPageRoutingModule { }
