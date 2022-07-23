import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UiKitTableComponent } from './ui-kit-table.component';
import { TdComponent } from './components/td/td.component';
import { ThComponent } from './components/th/th.component';
import { TrComponent } from './components/tr/tr.component';
import { TheadComponent } from './components/thead/thead.component';
import { TbodyComponent } from './components/tbody/tbody.component';



@NgModule({
  declarations: [
    UiKitTableComponent,
    TdComponent,
    ThComponent,
    TrComponent,
    TheadComponent,
    TbodyComponent
  ],
  exports: [
    UiKitTableComponent,
    TdComponent,
    ThComponent,
    TrComponent,
    TheadComponent,
    TbodyComponent
  ],
  imports: [
    CommonModule
  ]
})
export class UiKitTableModule { }
