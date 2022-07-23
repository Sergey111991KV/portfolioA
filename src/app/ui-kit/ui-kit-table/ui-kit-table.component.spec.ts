import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UiKitTableComponent } from './ui-kit-table.component';

describe('UiKitTableComponent', () => {
  let component: UiKitTableComponent;
  let fixture: ComponentFixture<UiKitTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UiKitTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UiKitTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
