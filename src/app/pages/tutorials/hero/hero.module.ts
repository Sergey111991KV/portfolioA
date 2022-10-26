import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroComponent } from './hero.component';
import { HeroRoutingModule } from './hero-routing.module';
import { HeroesComponent } from './heroes/heroes.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    HeroComponent,
    HeroesComponent
  ],
  imports: [
    CommonModule,
    HeroRoutingModule,
    FormsModule
  ]
})
export class HeroModule { }
