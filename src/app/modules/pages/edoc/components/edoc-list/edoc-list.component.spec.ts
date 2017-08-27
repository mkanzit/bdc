import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EdocListComponent } from './edoc-list.component';

describe('EdocListComponent', () => {
  let component: EdocListComponent;
  let fixture: ComponentFixture<EdocListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EdocListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EdocListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
