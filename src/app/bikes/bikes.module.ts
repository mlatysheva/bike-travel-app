import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from "../shared/shared.module";
import { SearchBikePageComponent } from './pages/search-bike-page/search-bike-page.component';
import { BikesListComponent } from './components/bikes-list/bikes-list.component';
import { BikeCardComponent } from './components/bike-card/bike-card.component';
import { RouterModule, Routes } from "@angular/router";
import { NgxsModule } from "@ngxs/store";
import { BikesState } from "../store/slices/bikes.slice";
import { SelectedBikePageComponent } from './pages/selected-bike-page/selected-bike-page.component';
import { DatePipe } from "@angular/common";

const routes: Routes = [
  {
    path: '',
    component: SearchBikePageComponent,
  },
  {
    path: ':id',
    component: SelectedBikePageComponent,
  }
];

@NgModule({
  declarations: [
    SearchBikePageComponent,
    BikesListComponent,
    BikeCardComponent,
    SelectedBikePageComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes),
    NgxsModule.forFeature([BikesState]),
  ],
  providers: [
    DatePipe,
  ],
  exports: [RouterModule],
})
export class BikesModule {
}
