import { Component, OnInit } from '@angular/core';
import { Observable } from "rxjs";
import { IBike } from "../../../models/bike.model";
import { Select } from "@ngxs/store";
import { BikesState } from "../../../store/slices/bikes.slice";

@Component({
  selector: 'app-selected-bike-page',
  templateUrl: './selected-bike-page.component.html',
  styleUrls: ['./selected-bike-page.component.scss']
})
export class SelectedBikePageComponent implements OnInit {
  @Select(BikesState.getSelectedBike) stolenBike$!: Observable<IBike | undefined>;
  @Select(BikesState.getStolenBikeLatitude) stolenBikeLatitude$!: Observable<number>;
  @Select(BikesState.getStolenBikeLongitude) stolenBikeLongitude$!: Observable<number>;

  stolenBikeLatitude!: number;
  stolenBikeLongitude!: number;

  ngOnInit() {
    this.stolenBikeLatitude$.subscribe((latitude) => {
      this.stolenBikeLatitude = latitude;
    });
    this.stolenBikeLongitude$.subscribe((longitude) => {
      this.stolenBikeLongitude = longitude;
    });
  }

}
