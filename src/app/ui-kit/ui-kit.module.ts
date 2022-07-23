import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UiKitComponent } from './ui-kit.component';
import {UiKitTableModule} from "./ui-kit-table/ui-kit-table.module";



@NgModule({
  declarations: [
    UiKitComponent,
  ],
  exports: [
    UiKitTableModule
  ],
  imports: [
    CommonModule,
    UiKitTableModule
  ]
})
export class UiKitModule { }
