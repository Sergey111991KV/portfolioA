import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UiKitComponent } from './ui-kit.component';
import {UiKitTableModule} from "./ui-kit-table/ui-kit-table.module";
import { UiKitInputComponent } from './ui-kit-input/ui-kit-input.component';
import { UiKitSelectComponent } from './ui-kit-select/ui-kit-select.component';
import {UiKitAbstractFormControlModule} from './ui-kit-abstract-form-control/ui-kit-abstract-form-control.module';
import {BaseComponentModule} from './base-component/base-component.module';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    UiKitComponent,
    UiKitInputComponent,
    UiKitSelectComponent,
  ],
  exports: [
    UiKitTableModule,
    UiKitSelectComponent,
    UiKitInputComponent,
    UiKitAbstractFormControlModule,
    BaseComponentModule,
  ],
  imports: [
    CommonModule,
    UiKitTableModule,
    FormsModule
  ]
})
export class UiKitModule { }
