import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlockSitemapComponent } from './block-sitemap.component';

describe('BlockSitemapComponent', () => {
  let component: BlockSitemapComponent;
  let fixture: ComponentFixture<BlockSitemapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlockSitemapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlockSitemapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
