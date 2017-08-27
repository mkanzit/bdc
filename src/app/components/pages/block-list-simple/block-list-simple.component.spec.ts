import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlockListSimpleComponent } from './block-list-simple.component';

describe('BlockListSimpleComponent', () => {
  let component: BlockListSimpleComponent;
  let fixture: ComponentFixture<BlockListSimpleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlockListSimpleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlockListSimpleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
