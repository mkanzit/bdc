import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FaqFilterComponent } from './faq-filter.component';

describe('FaqFilterComponent', () => {
  let component: FaqFilterComponent;
  let fixture: ComponentFixture<FaqFilterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FaqFilterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FaqFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
