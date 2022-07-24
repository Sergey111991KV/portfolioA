import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UiKitSelectComponent } from './ui-kit-select.component';

describe('UiKitSelectComponent', () => {
  let component: UiKitSelectComponent;
  let fixture: ComponentFixture<UiKitSelectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UiKitSelectComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UiKitSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
