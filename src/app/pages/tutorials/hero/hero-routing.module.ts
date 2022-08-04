import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { HeroComponent } from "./hero.component";

const routes: Routes = [
  {
    path: '',
    component: HeroComponent,
    // children: [
    //   {
    //     path: 'hero',
    //     loadChildren: () => import('./hero/hero.module').then((m) => m.HeroModule),
    //   }
    // ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HeroRoutingModule {
}
