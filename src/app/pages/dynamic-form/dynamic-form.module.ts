import { NgModule } from '@angular/core';
import { DynamicFormComponent } from './dynamic-form.component';
import {DynamicFormRoutingModule} from "./dynamic-form.routing.module";
import {ReactiveFormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    DynamicFormComponent
  ],
  imports: [
    DynamicFormRoutingModule,
    ReactiveFormsModule
  ]
})
export class DynamicFormModule { }
