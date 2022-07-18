import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {PipesComponent} from "./pipes.component";
import {PipesRoutingModule} from "./pipes-routing.module";



@NgModule({
  declarations: [
    PipesComponent
  ],
  imports: [
    CommonModule,
    PipesRoutingModule
  ]
})
export class PipesModule { }
