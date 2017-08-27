import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LangSwitcherComponent } from './lang-switcher.component';

describe('LangSwitcherComponent', () => {
  let component: LangSwitcherComponent;
  let fixture: ComponentFixture<LangSwitcherComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LangSwitcherComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LangSwitcherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
