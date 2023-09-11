import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UiKitComponent } from './ui-kit.component';
import {UiKitTableModule} from "./ui-kit-table/ui-kit-table.module";
import { UiKitInputComponent } from './ui-kit-input/ui-kit-input.component';
import { UiKitSelectComponent } from './ui-kit-select/ui-kit-select.component';
import {UiKitAbstractFormControlModule} from './ui-kit-abstract-form-control/ui-kit-abstract-form-control.module';
import {BaseComponentModule} from './base-component/base-component.module';
import { FormsModule } from '@angular/forms';
import { UiKitSliderComponent } from './ui-kit-slider/ui-kit-slider.component';
// import TaskComponent from './task/task.component';
// import { UiKitOverflowComponent } from './ui-kit-overflow/ui-kit-overflow.component';
// import { UiKitIconsComponent } from './ui-kit-icons/ui-kit-icons.component';
// import { UiIconComponent } from './ui-kit-icons/ui-icon/ui-icon.component';



@NgModule({
  declarations: [
    UiKitComponent,
    UiKitInputComponent,
    UiKitSelectComponent,
    UiKitSliderComponent,
    // TaskComponent,
    // UiKitOverflowComponent,
    // UiKitIconsComponent,
    // UiIconComponent,
  ],
  exports: [
    UiKitTableModule,
    UiKitSelectComponent,
    UiKitInputComponent,
    UiKitAbstractFormControlModule,
    BaseComponentModule,
    UiKitSliderComponent,
  ],
  imports: [
    CommonModule,
    UiKitTableModule,
    FormsModule
  ]
})
export class UiKitModule { }
