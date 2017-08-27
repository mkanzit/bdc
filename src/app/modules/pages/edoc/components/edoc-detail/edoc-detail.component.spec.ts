import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EdocDetailComponent } from './edoc-detail.component';

describe('EdocDetailComponent', () => {
  let component: EdocDetailComponent;
  let fixture: ComponentFixture<EdocDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EdocDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EdocDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
