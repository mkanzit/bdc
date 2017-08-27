import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FlashNewsComponent } from './flash-news.component';

describe('FlashNewsComponent', () => {
  let component: FlashNewsComponent;
  let fixture: ComponentFixture<FlashNewsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FlashNewsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlashNewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
