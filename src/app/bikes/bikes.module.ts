import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from "../shared/shared.module";
import { SearchBikePageComponent } from './pages/search-bike-page/search-bike-page.component';
import { BikesListComponent } from './components/bikes-list/bikes-list.component';
import { BikeCardComponent } from './components/bike-card/bike-card.component';
import { RouterModule, Routes } from "@angular/router";

const routes: Routes = [
  {
    path: '',
    component: SearchBikePageComponent,
  },
];

@NgModule({
  declarations: [
    SearchBikePageComponent,
    BikesListComponent,
    BikeCardComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes),
  ],
  exports: [RouterModule],
})
export class BikesModule {
}
