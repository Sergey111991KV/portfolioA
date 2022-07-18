import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { PipesComponent } from "./pipes.component";

const routes: Routes = [
  {
    path: '',
    component: PipesComponent,
    children: [
      {
        path: 'ui-kit',
        loadChildren: () => import('./pipes.module').then((m) => m.PipesModule),
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PipesRoutingModule {
}
