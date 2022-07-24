import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UiKitInputComponent } from './ui-kit-input.component';

describe('UiKitInputComponent', () => {
  let component: UiKitInputComponent;
  let fixture: ComponentFixture<UiKitInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UiKitInputComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UiKitInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
