import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { UiKitComponent } from './ui-kit.component'


const routes: Routes = [
  {
    path: '',
    component: UiKitComponent,
    children: []
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UiKitRoutingModule {
}
