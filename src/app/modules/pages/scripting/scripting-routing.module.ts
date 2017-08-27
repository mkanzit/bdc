import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ScriptingComponent } from './components/scripting/scripting.component';
import { ScriptComponent } from './components/script/script.component';

const scriptingRoutes: Routes = [
  {
    path: 'scripting',
    component: ScriptingComponent,
    children: [
      { path: '', redirectTo: 'scripting', pathMatch: 'full' },
      { path: ':id', component: ScriptComponent},
    ]
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(scriptingRoutes)
  ],
  exports: [
    RouterModule,
  ]
})

export class ScriptingRoutingModule { }
