import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

import { ScriptComponent } from '../script/script.component';

@Component({
  selector: 'app-scripting',
  templateUrl: './scripting.component.html',
  styleUrls: ['./scripting.component.scss']
})
export class ScriptingComponent implements OnInit {

  constructor(
    private titleService: Title
  ) { }

  ngOnInit() {
    this.titleService.setTitle('Orange - Scripting');
  }

}
