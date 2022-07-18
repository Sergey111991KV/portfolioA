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
        loadChildren: () => import('./ui-kit-page/ui-kit-page.module').then((m) => m.UiKitPageModule),
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
