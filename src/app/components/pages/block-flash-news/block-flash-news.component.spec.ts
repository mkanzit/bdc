import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlockFlashNewsComponent } from './block-flash-news.component';

describe('BlockFlashNewsComponent', () => {
  let component: BlockFlashNewsComponent;
  let fixture: ComponentFixture<BlockFlashNewsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlockFlashNewsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlockFlashNewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
