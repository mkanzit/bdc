import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlockEdocComponent } from './block-edoc.component';

describe('BlockEdocComponent', () => {
  let component: BlockEdocComponent;
  let fixture: ComponentFixture<BlockEdocComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlockEdocComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlockEdocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
