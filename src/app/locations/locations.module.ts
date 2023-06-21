import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule} from "../shared/shared.module";
import { LocationsPageComponent } from './pages/locations-page/locations-page.component';
import {RouterModule, Routes} from "@angular/router";

const routes: Routes = [
  {
    path: '',
    component: LocationsPageComponent
  }
]

@NgModule({
  declarations: [
    LocationsPageComponent
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
