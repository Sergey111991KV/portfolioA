import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import {DynamicComponent} from "./dynamic-component.component";

const routes: Routes = [
  {
    path: '',
    component: DynamicComponent,
    children: [
      // {
      //   path: '',
      //   loadChildren: () => import('./dynamic-component.module').then((m) => m.DynamicComponentModule),
      // }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DynamicComponentRoutingModule {
}
