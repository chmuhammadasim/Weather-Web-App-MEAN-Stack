import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterLandingPageComponent } from './footer-landing-page.component';

describe('FooterLandingPageComponent', () => {
  let component: FooterLandingPageComponent;
  let fixture: ComponentFixture<FooterLandingPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FooterLandingPageComponent]
    });
    fixture = TestBed.createComponent(FooterLandingPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
