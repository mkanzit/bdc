import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';

const newsRoutes: Routes = [
  { path: 'login', component: LoginComponent },
];

@NgModule({
  imports: [
    RouterModule.forChild(newsRoutes)
  ],
  exports: [
    RouterModule,
  ]
})

export class LoginRoutingModule { }
