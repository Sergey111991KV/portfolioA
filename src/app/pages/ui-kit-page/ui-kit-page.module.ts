import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UiKitPageComponent } from './ui-kit-page.component'
import { UiKitPageRoutingModule } from './ui-kit-page-routing.module';
import { UiKitHomeComponent } from './ui-kit-home/ui-kit-home.component';
import { UiKitTablePageComponent } from './ui-kit-table-page/ui-kit-table-page.component';
import { UiKitModule } from "../../ui-kit/ui-kit.module";
import { UiKitFormComponent } from './ui-kit-form/ui-kit-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UiKitSliderPageComponent } from './ui-kit-slider-page/ui-kit-slider-page.component';


@NgModule({
  declarations: [
    UiKitPageComponent,
    UiKitHomeComponent,
    UiKitTablePageComponent,
    UiKitFormComponent,
    UiKitSliderPageComponent
  ],
  imports: [
    CommonModule,
    UiKitPageRoutingModule,
    UiKitModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class UiKitPageModule { }
