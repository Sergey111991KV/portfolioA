import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UiKitSliderComponent } from './ui-kit-slider.component';

describe('UiKitSliderComponent', () => {
  let component: UiKitSliderComponent;
  let fixture: ComponentFixture<UiKitSliderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UiKitSliderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UiKitSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
