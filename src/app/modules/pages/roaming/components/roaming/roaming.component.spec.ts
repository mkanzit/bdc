import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoamingComponent } from './roaming.component';

describe('RoamingComponent', () => {
  let component: RoamingComponent;
  let fixture: ComponentFixture<RoamingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoamingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoamingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
