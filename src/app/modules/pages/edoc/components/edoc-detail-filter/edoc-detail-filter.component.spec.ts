import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EdocDetailFilterComponent } from './edoc-detail-filter.component';

describe('EdocDetailFilterComponent', () => {
  let component: EdocDetailFilterComponent;
  let fixture: ComponentFixture<EdocDetailFilterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EdocDetailFilterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EdocDetailFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
