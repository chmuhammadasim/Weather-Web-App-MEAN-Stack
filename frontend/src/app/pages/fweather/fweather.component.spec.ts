import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FweatherComponent } from './fweather.component';

describe('FweatherComponent', () => {
  let component: FweatherComponent;
  let fixture: ComponentFixture<FweatherComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FweatherComponent]
    });
    fixture = TestBed.createComponent(FweatherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
