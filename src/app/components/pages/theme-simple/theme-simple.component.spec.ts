import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThemeSimpleComponent } from './theme-simple.component';

describe('ThemeSimpleComponent', () => {
  let component: ThemeSimpleComponent;
  let fixture: ComponentFixture<ThemeSimpleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThemeSimpleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThemeSimpleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
