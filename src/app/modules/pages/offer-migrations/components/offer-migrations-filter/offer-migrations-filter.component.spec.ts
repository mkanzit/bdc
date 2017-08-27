import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OfferImigrationsFilterComponent } from './offer-migrations-filter.component';

describe('OfferImigrationsFilterComponent', () => {
  let component: OfferImigrationsFilterComponent;
  let fixture: ComponentFixture<OfferImigrationsFilterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OfferImigrationsFilterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OfferImigrationsFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
