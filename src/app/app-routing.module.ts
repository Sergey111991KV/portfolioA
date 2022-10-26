import { ExtraOptions, RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import {MainComponent} from "./main/main.component";

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./main/main.module').then((m) => m.MainModule),
  },
  {
    path: 'pages',
    loadChildren: () => import('./pages/pages.module').then((m) => m.PagesModule),
  },
  {
    path: '**',
    loadChildren: () => import('./pages/bad-request/bad-request.module').then((m) => m.BadRequestModule), }
];

//TODO
const config: ExtraOptions = {
    useHash: false,
};

@NgModule({
    imports: [
        RouterModule.forRoot(routes, config),
    ],
    exports: [RouterModule],
})
export class AppRoutingModule {}
