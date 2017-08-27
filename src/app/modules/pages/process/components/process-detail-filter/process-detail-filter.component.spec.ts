import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProcessDetailFilterComponent } from './process-detail-filter.component';

describe('ProcessDetailFilterComponent', () => {
  let component: ProcessDetailFilterComponent;
  let fixture: ComponentFixture<ProcessDetailFilterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProcessDetailFilterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProcessDetailFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
