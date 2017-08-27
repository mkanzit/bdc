import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EdocFilterComponent } from './edoc-filter.component';

describe('EdocFilterComponent', () => {
  let component: EdocFilterComponent;
  let fixture: ComponentFixture<EdocFilterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EdocFilterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EdocFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
