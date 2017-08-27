import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleTextIllustrationComponent } from './simple-text-illustration.component';

describe('SimpleTextIllustrationComponent', () => {
  let component: SimpleTextIllustrationComponent;
  let fixture: ComponentFixture<SimpleTextIllustrationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SimpleTextIllustrationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleTextIllustrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
