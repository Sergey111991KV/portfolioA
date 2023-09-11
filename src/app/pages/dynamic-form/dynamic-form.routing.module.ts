import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import {DynamicFormComponent} from "./dynamic-form.component";

const routes: Routes = [
  {
    path: '',
    component: DynamicFormComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DynamicFormRoutingModule {
}
