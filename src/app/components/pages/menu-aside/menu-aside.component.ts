import { Component, OnInit, HostBinding, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { LayoutEventsService } from '../../../shared/_events/layout-events.service';

@Component({
  selector: 'app-menu-aside',
  templateUrl: './menu-aside.component.html',
  styleUrls: ['./menu-aside.component.scss']
})
export class MenuAsideComponent implements OnInit {

  @HostBinding('class.rtl') rtl: boolean;
  @Input() state: Object;

  suggestionForm: FormGroup;
  dislikeForm: FormGroup;

  notation;
  data;
  txt;
  txtAR;

  constructor(
    private fb: FormBuilder,
    private layoutEvents: LayoutEventsService
  ) {

    this.rtl = false;

    this.notation = {
      'like': false,
      'dislike': false
    }

    this.txt = {
      'suggestion': {
        'title': 'Suggestion',
        'desc': 'This is Photoshop\'s version of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin.',
        'label1': 'Titre',
        'label2': 'Message',
        'cta': [
          'Annuler',
          'Envoyer'
        ]
      },
      'like': {
        'title': 'J’aime cet article',
        'likes': 20,
        'dislikes': 6,
        'label1': 'Pourquoi ?',
        'cta': [
          'Annuler',
          'Envoyer'
        ]
      }
    };

    this.txtAR = {
      'suggestion': {
        'title': 'اقتراح',
        'desc': 'هذا هو الإفراج فوتوشوب من أبجد هوز. هذا هو الإفراج فوتوشوب من أبجد هوز.',
        'label1': 'العنوان',
        'label2': 'رسالة',
        'cta': [
          'إلغاء',
          'إرسال'
        ]
      },
      'like': {
        'title': 'أنا أحب هذا المقال',
        'likes': 20,
        'dislikes': 6,
        'label1': 'لماذا؟',
        'cta': [
          'إلغاء',
          'إرسال'
        ]
      }
    };

    this.state = {
        'suggestion': true,
        'like': true,
        'scripting': true,
        'process': true
    };

    this.suggestionForm = fb.group({
      'title': ['', Validators.compose([Validators.required])],
      'message': ['', Validators.compose([Validators.required])]
    });

    this.dislikeForm = fb.group({
      'message': ['', Validators.compose([Validators.required])]
    });
  }

  ngOnInit() {
    this.data = this.txt;

    this.layoutEvents.getRtl().subscribe((rtl: boolean) => {
      this.rtl = rtl;

      if ( rtl === true ) {
        this.data = this.txtAR;
      } else {
        this.data = this.txt;
      }
    });
  }

  suggest(form) {
    console.log(form);
  }

  dislike(form) {
    console.log(form);
  }


  resetSuggestion($event) {
    $event.preventDefault();
    this.suggestionForm.reset();
  }

  resetDislike($event) {
    $event.preventDefault();
    this.dislikeForm.reset();
  }


  likeContent($event) {
    $event.preventDefault();
    this.notation.like = this.notation.like ? false : true;
  }

  dislikeContent($event) {
    $event.preventDefault();
    this.notation.dislike = this.notation.dislike ? false : true;
  }
}
