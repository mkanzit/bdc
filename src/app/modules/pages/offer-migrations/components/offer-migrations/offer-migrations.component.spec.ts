import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OfferImigrationsComponent } from './offer-migrations.component';

describe('OfferImigrationsComponent', () => {
  let component: OfferImigrationsComponent;
  let fixture: ComponentFixture<OfferImigrationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OfferImigrationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OfferImigrationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
