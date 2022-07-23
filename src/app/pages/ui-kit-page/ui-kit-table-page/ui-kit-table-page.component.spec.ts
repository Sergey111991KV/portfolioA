import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UiKitTablePageComponent } from './ui-kit-table-page.component';

describe('UiKitTablePageComponent', () => {
  let component: UiKitTablePageComponent;
  let fixture: ComponentFixture<UiKitTablePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UiKitTablePageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UiKitTablePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
