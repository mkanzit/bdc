import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PdvMapComponent } from './pdv-map.component';

describe('PdvMapComponent', () => {
  let component: PdvMapComponent;
  let fixture: ComponentFixture<PdvMapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PdvMapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PdvMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
