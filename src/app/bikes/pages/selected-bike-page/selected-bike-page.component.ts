import { Component } from '@angular/core';
import { Observable } from "rxjs";
import { IBike } from "../../../models/bike.model";
import { Select } from "@ngxs/store";
import { BikesState } from "../../../store/slices/bikes.slice";

@Component({
  selector: 'app-selected-bike-page',
  templateUrl: './selected-bike-page.component.html',
  styleUrls: ['./selected-bike-page.component.scss']
})
export class SelectedBikePageComponent {
  @Select(BikesState.getSelectedBike) selectedBike$!: Observable<IBike | undefined>;

}
