import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule} from "../shared/shared.module";
import { LocationsPageComponent } from './pages/locations-page/locations-page.component';
import {RouterModule, Routes} from "@angular/router";
import { LocationsListComponent } from './components/locations-list/locations-list.component';
import { LocationCardComponent } from './components/location-card/location-card.component';
import { SelectedLocationPageComponent } from './pages/selected-location-page/selected-location-page.component';
import { LocationDetailsComponent } from './components/location-details/location-details.component';

const routes: Routes = [
  {
    path: '',
    component: LocationsPageComponent
  },
  {
    path: ':id',
    component: SelectedLocationPageComponent
  }
]

@NgModule({
  declarations: [
    LocationsPageComponent,
    LocationsListComponent,
    LocationCardComponent,
    SelectedLocationPageComponent,
    LocationDetailsComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class LocationsModule { }
