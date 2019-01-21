import { NgModule } from '@angular/core';
import { HeroSearchComponent } from './hero-search.component';
import {RouterModule} from '@angular/router';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    HeroSearchComponent
  ],
  imports: [
    RouterModule,
    CommonModule
  ],
  exports:[ HeroSearchComponent ],
  providers: []
})
export class HeroSearchModule { }
