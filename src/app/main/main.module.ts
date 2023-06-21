import { NgModule } from '@angular/core';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { SearchPlaceComponent } from './components/search-place/search-place.component';
import { SharedModule} from "../shared/shared.module";
import { FormsModule } from "@angular/forms";
import { NgxsModule} from "@ngxs/store";
import { SearchState } from "../store/slices/search.slice";
import { HttpClientModule } from "@angular/common/http";
import { LocationsState } from "../store/slices/locations.slice";
import {RouterModule, Routes} from "@angular/router";

const routes: Routes = [
  {
    path: '',
    component: MainPageComponent
  }
]
@NgModule({
  declarations: [
    MainPageComponent,
    SearchPlaceComponent
  ],
  exports: [
    RouterModule
  ],
  imports: [
    SharedModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forChild(routes),
    NgxsModule.forFeature([SearchState, LocationsState])
  ]
})
export class MainModule { }
