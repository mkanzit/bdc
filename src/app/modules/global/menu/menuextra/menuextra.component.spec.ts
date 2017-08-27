import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuextraComponent } from './menuextra.component';

describe('MenuextraComponent', () => {
  let component: MenuextraComponent;
  let fixture: ComponentFixture<MenuextraComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuextraComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuextraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
