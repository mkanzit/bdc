import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlockNewsComponent } from './block-news.component';

describe('BlockNewsComponent', () => {
  let component: BlockNewsComponent;
  let fixture: ComponentFixture<BlockNewsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlockNewsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlockNewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
