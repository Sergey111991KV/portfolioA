import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UiKitPageComponent } from './ui-kit-page.component'
import { UiKitPageRoutingModule } from './ui-kit-page-routing.module';
import { UiKitHomeComponent } from './ui-kit-home/ui-kit-home.component';


@NgModule({
  declarations: [
    UiKitPageComponent,
    UiKitHomeComponent
  ],
  imports: [
    CommonModule,
    UiKitPageRoutingModule
  ]
})
export class UiKitPageModule { }
