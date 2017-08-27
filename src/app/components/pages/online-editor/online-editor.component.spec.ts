import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OnlineEditorComponent } from './online-editor.component';

describe('OnlineEditorComponent', () => {
  let component: OnlineEditorComponent;
  let fixture: ComponentFixture<OnlineEditorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OnlineEditorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OnlineEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
