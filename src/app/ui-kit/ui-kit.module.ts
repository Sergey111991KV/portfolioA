import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UiKitComponent } from './ui-kit.component';
import {UiKitTableModule} from "./ui-kit-table/ui-kit-table.module";
import { UiKitInputComponent } from './ui-kit-input/ui-kit-input.component';
import { UiKitSelectComponent } from './ui-kit-select/ui-kit-select.component';



@NgModule({
  declarations: [
    UiKitComponent,
    UiKitInputComponent,
    UiKitSelectComponent,
  ],
  exports: [
    UiKitTableModule,
    UiKitSelectComponent,
    UiKitInputComponent
  ],
  imports: [
    CommonModule,
    UiKitTableModule
  ]
})
export class UiKitModule { }
