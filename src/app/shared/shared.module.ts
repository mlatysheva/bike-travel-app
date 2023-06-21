import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './material/material.module';
import { SlickCarouselModule } from "ngx-slick-carousel";
import { ReviewCardComponent } from './components/review-card/review-card.component';

@NgModule({
  declarations: [
    ReviewCardComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    SlickCarouselModule,
  ],
  exports: [
    CommonModule,
    MaterialModule,
    SlickCarouselModule,
    ReviewCardComponent
  ]
})
export class SharedModule { }
