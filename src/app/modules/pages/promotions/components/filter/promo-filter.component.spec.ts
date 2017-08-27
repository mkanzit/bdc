import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PromoFilterComponent } from './promo-filter.component';

describe('PromoFilterComponent', () => {
  let component: PromoFilterComponent;
  let fixture: ComponentFixture<PromoFilterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PromoFilterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PromoFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
