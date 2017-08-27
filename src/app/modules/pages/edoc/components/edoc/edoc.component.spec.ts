import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EdocComponent } from './edoc.component';

describe('EdocComponent', () => {
  let component: EdocComponent;
  let fixture: ComponentFixture<EdocComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EdocComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EdocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
