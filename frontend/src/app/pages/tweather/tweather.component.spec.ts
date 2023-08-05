import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TweatherComponent } from './tweather.component';

describe('TweatherComponent', () => {
  let component: TweatherComponent;
  let fixture: ComponentFixture<TweatherComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TweatherComponent]
    });
    fixture = TestBed.createComponent(TweatherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
