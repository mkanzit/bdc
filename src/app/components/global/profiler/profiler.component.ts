import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profiler',
  templateUrl: './profiler.component.html',
  styleUrls: ['./profiler.component.scss']
})
export class ProfilerComponent implements OnInit {

  profile: string;

  constructor() {
    this.profile = 'b2c';  // User default profile
  }

  ngOnInit() {
  }

  switchProfile() {
    this.profile = (this.profile === 'b2c') ? 'b2b' : 'b2c';
  }

}
