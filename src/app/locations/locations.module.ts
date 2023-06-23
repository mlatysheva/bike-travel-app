import { NgModule } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { LocationsPageComponent } from './pages/locations-page/locations-page.component';
import { RouterModule, Routes } from '@angular/router';
import { LocationsListComponent } from './components/locations-list/locations-list.component';
import { LocationCardComponent } from './components/location-card/location-card.component';
import { SelectedLocationPageComponent } from './pages/selected-location-page/selected-location-page.component';
import { LocationDetailsComponent } from './components/location-details/location-details.component';
import { LocationPhotosComponent } from './components/location-photos/location-photos.component';
import { LocationReviewsComponent } from './components/location-reviews/location-reviews.component';
import { SearchBikeBtnComponent } from './components/search-bike-btn/search-bike-btn.component';

const routes: Routes = [
  {
    path: '',
    component: LocationsPageComponent,
  },
  {
    path: ':id',
    component: SelectedLocationPageComponent,
  },
];

@NgModule({
  declarations: [
    LocationsPageComponent,
    LocationsListComponent,
    LocationCardComponent,
    SelectedLocationPageComponent,
    LocationDetailsComponent,
    LocationPhotosComponent,
    LocationReviewsComponent,
    SearchBikeBtnComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes),
    NgOptimizedImage,
  ],
  exports: [RouterModule],
})
export class LocationsModule {}
