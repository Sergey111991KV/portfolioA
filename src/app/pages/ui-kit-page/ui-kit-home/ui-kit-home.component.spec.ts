import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UiKitHomeComponent } from './ui-kit-home.component';

describe('UiKitHomeComponent', () => {
  let component: UiKitHomeComponent;
  let fixture: ComponentFixture<UiKitHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UiKitHomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UiKitHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
