import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import {TuiComponent} from "./tui.component";

const routes: Routes = [
  {
    path: '',
    component: TuiComponent
  },
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TuiRoutingModule {
}
