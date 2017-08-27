import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PdvListComponent } from './pdv-list.component';

describe('PdvListComponent', () => {
  let component: PdvListComponent;
  let fixture: ComponentFixture<PdvListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PdvListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PdvListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
