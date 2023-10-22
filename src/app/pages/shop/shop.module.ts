import { NgModule } from '@angular/core';
import {ReactiveFormsModule} from "@angular/forms";
import {ShopComponent} from "./shop.component";
import {ShopRoutingModule} from "./shop-routing.module";

@NgModule({
  declarations: [
    ShopComponent
  ],
  imports: [
    ReactiveFormsModule,
    ShopRoutingModule
  ]
})
export class ShopModule { }
