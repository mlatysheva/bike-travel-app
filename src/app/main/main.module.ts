import { NgModule } from '@angular/core';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { SearchPlaceComponent } from './components/search-place/search-place.component';
import { SharedModule} from "../shared/shared.module";
import { FormsModule } from "@angular/forms";
import { NgxsModule} from "@ngxs/store";
import { SearchState } from "../store/slices/search.slice";
import { HttpClientModule } from "@angular/common/http";


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
    HttpClientModule,
    NgxsModule.forFeature([SearchState])
  ]
})
export class MainModule { }
