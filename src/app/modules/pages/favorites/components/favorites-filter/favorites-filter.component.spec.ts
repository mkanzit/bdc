import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FavoritesFilterComponent } from './favorites-filter.component';

describe('FavoritesFilterComponent', () => {
  let component: FavoritesFilterComponent;
  let fixture: ComponentFixture<FavoritesFilterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FavoritesFilterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FavoritesFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
