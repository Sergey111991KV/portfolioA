import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BadRequestComponent } from './bad-request.component';
import {BadRequestRoutingModule} from "./bad-request-routing.module";

@NgModule({
  declarations: [
    BadRequestComponent
  ],
  imports: [
    CommonModule,
    BadRequestRoutingModule
  ]
})
export class BadRequestModule { }
