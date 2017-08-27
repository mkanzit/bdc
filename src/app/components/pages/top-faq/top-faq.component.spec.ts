import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopFaqComponent } from './top-faq.component';

describe('TopFaqComponent', () => {
  let component: TopFaqComponent;
  let fixture: ComponentFixture<TopFaqComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopFaqComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopFaqComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
