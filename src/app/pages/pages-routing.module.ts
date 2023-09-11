import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { PagesComponent } from "./pages.component";

const routes: Routes = [
  {
    path: '',
    component: PagesComponent,
    children: [
      {
        path: 'dynamic-component',
        loadChildren: () => import('./dynamic-component/dynamic-component.module').then((m) => m.DynamicComponentModule),
      },
      {
        path: 'dynamic-form',
        loadChildren: () => import('./dynamic-form/dynamic-form.module').then((m) => m.DynamicFormModule),
      },
      {
        path: 'pipes',
        loadChildren: () => import('./pipes/pipes.module').then((m) => m.PipesModule),
      },
      {
        path: 'rxjs',
        loadChildren: () => import('./rxjs/rxjs.module').then((m) => m.RxjsModule),
      },
      {
        path: 'tutorials',
        loadChildren: () => import('./tutorials/tutorials.module').then((m) => m.TutorialsModule),
      },
      {
        path: 'ui-kit',
        loadChildren: () => import('./ui-kit-page/ui-kit-page.module').then((m) => m.UiKitPageModule),
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {
}
