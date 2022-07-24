import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UiKitFormComponent } from './ui-kit-form.component';

describe('UiKitFormComponent', () => {
  let component: UiKitFormComponent;
  let fixture: ComponentFixture<UiKitFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UiKitFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UiKitFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
