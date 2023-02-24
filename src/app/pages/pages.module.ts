import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PagesComponent} from "./pages.component";
import {PagesRoutingModule} from "./pages-routing.module";
import {LayoutModule} from "../layout/layout.module";
import {DynamicComponentModule} from "./dynamic-component/dynamic-component.module";
// import {UiKitModule} from "../ui-kit/ui-kit.module";


@NgModule({
  declarations: [
    PagesComponent,
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    LayoutModule,
    DynamicComponentModule,
    // UiKitModule
  ]
})
export class PagesModule {
}
