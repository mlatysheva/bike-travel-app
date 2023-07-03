import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './material/material.module';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { ReviewCardComponent } from './components/review-card/review-card.component';
import { GoogleMapsModule } from "@angular/google-maps";
import { GoogleMapComponent } from './components/google-map/google-map.component';
import { environment } from "../../environments/environment";

@NgModule({
  declarations: [ReviewCardComponent, GoogleMapComponent],
  imports: [
    CommonModule,
    MaterialModule,
    SlickCarouselModule,
    GoogleMapsModule,
  ],
  providers: [
    { provide: 'googleMapsApiKey', useValue: environment.googleMapsApiKey }
  ],
  exports: [
    CommonModule,
    MaterialModule,
    SlickCarouselModule,
    ReviewCardComponent,
    GoogleMapComponent,
  ],
})
export class SharedModule {
}
