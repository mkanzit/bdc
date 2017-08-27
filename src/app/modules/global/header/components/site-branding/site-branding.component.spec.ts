import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SiteBrandingComponent } from './site-branding.component';

describe('SiteBrandingComponent', () => {
  let component: SiteBrandingComponent;
  let fixture: ComponentFixture<SiteBrandingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SiteBrandingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SiteBrandingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
