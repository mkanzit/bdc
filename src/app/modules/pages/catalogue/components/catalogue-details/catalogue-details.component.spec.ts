import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CatalogueDetailsComponent } from './catalogue-details.component';

describe('CatalogueDetailsComponent', () => {
  let component: CatalogueDetailsComponent;
  let fixture: ComponentFixture<CatalogueDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CatalogueDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CatalogueDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
