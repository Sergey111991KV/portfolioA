import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { PagesComponent } from "./pages.component";

const routes: Routes = [
  {
    path: '',
    component: PagesComponent,
    children: [
      {
        path: 'ui-kit',
        loadChildren: () => import('../ui-kit/ui-kit.module').then((m) => m.UiKitModule),
      },
      {
        path: 'pipes',
        loadChildren: () => import('./pipes/pipes.module').then((m) => m.PipesModule),
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {
}
