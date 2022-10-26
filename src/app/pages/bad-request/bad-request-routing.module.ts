import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import {BadRequestComponent} from "./bad-request.component";

const routes: Routes = [
  {
    path: '',
    component: BadRequestComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('./bad-request.module').then((m) => m.BadRequestModule),
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BadRequestRoutingModule {
}
