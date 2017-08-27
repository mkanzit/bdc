import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PdvComponent } from './pdv.component';

describe('PdvComponent', () => {
  let component: PdvComponent;
  let fixture: ComponentFixture<PdvComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PdvComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PdvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
