import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {DynamicComponentRoutingModule} from "./dynamic-component-routing.module";
import {DynamicComponent} from "./dynamic-component.component";
import { AlertComponent } from './alert/alert.component';

@NgModule({
  declarations: [
    DynamicComponent,
    AlertComponent
  ],
  imports: [
    CommonModule,
    DynamicComponentRoutingModule
  ]
})
export class DynamicComponentModule { }
