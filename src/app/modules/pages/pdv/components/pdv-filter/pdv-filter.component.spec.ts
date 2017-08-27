import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PdvFilterComponent } from './pdv-filter.component';

describe('PdvFilterComponent', () => {
  let component: PdvFilterComponent;
  let fixture: ComponentFixture<PdvFilterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PdvFilterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PdvFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
