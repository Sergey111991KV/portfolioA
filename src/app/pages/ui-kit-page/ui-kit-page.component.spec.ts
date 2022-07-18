import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UiKitPageComponent } from './ui-kit-page.component';

describe('UiKitComponent', () => {
  let component: UiKitPageComponent;
  let fixture: ComponentFixture<UiKitPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UiKitPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UiKitPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
