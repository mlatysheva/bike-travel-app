import { NgModule } from '@angular/core';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { SearchPlaceComponent } from './components/search-place/search-place.component';
import { SharedModule} from "../shared/shared.module";
import {FormsModule} from "@angular/forms";
import {MatTooltipModule} from "@angular/material/tooltip";


@NgModule({
  declarations: [
    MainPageComponent,
    SearchPlaceComponent
  ],
  exports: [
    MainPageComponent
  ],
  imports: [
    SharedModule,
    FormsModule,
    MatTooltipModule
  ]
})
export class MainModule { }
