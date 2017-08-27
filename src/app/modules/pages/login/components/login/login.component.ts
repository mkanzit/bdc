import { Component, OnInit, HostBinding } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Title } from '@angular/platform-browser';
import { LayoutEventsService } from '../../../../../shared/_events/layout-events.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  @HostBinding('class.rtl') rtl: boolean;
  form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private titleService: Title,
    private layoutService: LayoutEventsService
  ) {
    this.rtl = false;

    this.form = fb.group({
      'email': ['', Validators.compose([Validators.required])],
      'password': ['', Validators.compose([Validators.required])]
    });
  }

  ngOnInit() {
    this.titleService.setTitle('Authentification');

    this.layoutService.getRtl().subscribe((rtl) => {
      this.rtl = rtl;
    });
  }


  submit() {
    console.log(this.form.value);
  }

  reset($event) {
    $event.preventDefault();
    this.form.reset();
  }

}
