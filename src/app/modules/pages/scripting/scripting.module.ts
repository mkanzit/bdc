import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { ScriptingRoutingModule } from './scripting-routing.module';

import { ScriptingComponent } from './components/scripting/scripting.component';

import { ScriptingService } from './service/scripting.service';
import { ScriptComponent } from './components/script/script.component';

@NgModule({
  imports: [
    SharedModule,
    ScriptingRoutingModule
  ],
  exports: [
    ScriptingRoutingModule
  ],
  declarations: [
    ScriptingComponent,
    ScriptComponent
  ],
  providers: [
    ScriptingService
  ]
})
export class ScriptingModule { }
