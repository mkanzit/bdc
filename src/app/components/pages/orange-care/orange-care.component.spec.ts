import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrangeCareComponent } from './orange-care.component';

describe('OrangeCareComponent', () => {
  let component: OrangeCareComponent;
  let fixture: ComponentFixture<OrangeCareComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrangeCareComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrangeCareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
