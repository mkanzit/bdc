import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlockAlertsComponent } from './block-alerts.component';

describe('BlockAlertsComponent', () => {
  let component: BlockAlertsComponent;
  let fixture: ComponentFixture<BlockAlertsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlockAlertsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlockAlertsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
