import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './material/material.module';
import { SlickCarouselModule } from "ngx-slick-carousel";


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MaterialModule,
    SlickCarouselModule
  ],
  exports: [
    CommonModule,
    MaterialModule,
    SlickCarouselModule
  ]
})
export class SharedModule { }
