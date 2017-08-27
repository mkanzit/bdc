import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FaqComponent } from './components/faq/faq.component';

const faqRoutes: Routes = [
  { path: 'faq', component: FaqComponent },
];

@NgModule({
  imports: [
    RouterModule.forChild(faqRoutes)
  ],
  exports: [
    RouterModule,
  ]
})

export class FaqRoutingModule { }
