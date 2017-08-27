import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Mobile4RemonteesComponent } from './mobile-4-remontees.component';

describe('Mobile4RemonteesComponent', () => {
  let component: Mobile4RemonteesComponent;
  let fixture: ComponentFixture<Mobile4RemonteesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Mobile4RemonteesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Mobile4RemonteesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
