import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { TutorialsComponent } from "./tutorials.component";

const routes: Routes = [
  {
    path: '',
    component: TutorialsComponent,
    children: [
      {
        path: 'hero',
        loadChildren: () => import('./hero/hero.module').then((m) => m.HeroModule),
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TutorialsRoutingModule {
}
