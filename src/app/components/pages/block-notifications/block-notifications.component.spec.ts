import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlockNotificationsComponent } from './block-notifications.component';

describe('BlockNotificationsComponent', () => {
  let component: BlockNotificationsComponent;
  let fixture: ComponentFixture<BlockNotificationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlockNotificationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlockNotificationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
