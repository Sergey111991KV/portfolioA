import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UiKitComponent } from './ui-kit.component'
import { UiKitRoutingModule } from './ui-kit-routing.module';



@NgModule({
  declarations: [
    UiKitComponent
  ],
  imports: [
    CommonModule,
    UiKitRoutingModule
  ]
})
export class UiKitModule { }
