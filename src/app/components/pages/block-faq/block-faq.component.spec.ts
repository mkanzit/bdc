import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlockFaqComponent } from './block-faq.component';

describe('BlockFaqComponent', () => {
  let component: BlockFaqComponent;
  let fixture: ComponentFixture<BlockFaqComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlockFaqComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlockFaqComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
