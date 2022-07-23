import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { UiKitPageComponent } from './ui-kit-page.component'
import {UiKitHomeComponent} from "./ui-kit-home/ui-kit-home.component";
import {UiKitTablePageComponent} from "./ui-kit-table-page/ui-kit-table-page.component";


const routes: Routes = [
  {
    path: '',
    component: UiKitPageComponent,
    children: [
      {
        path: '',
        component: UiKitHomeComponent,
        pathMatch: 'full',
      },
      {
        path: 'cnv-table',
        component: UiKitTablePageComponent,
        pathMatch: 'full',
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UiKitPageRoutingModule {
}
