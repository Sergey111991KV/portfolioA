import { NgModule } from '@angular/core';
import { TuiComponent } from './tui.component';
import {ReactiveFormsModule} from "@angular/forms";
import {TuiRoutingModule} from "./tui-routing.module";

@NgModule({
  declarations: [
    TuiComponent
  ],
  imports: [
    ReactiveFormsModule,
    TuiRoutingModule
  ]
})
export class TuiModule { }
