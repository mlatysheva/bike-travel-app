import { Component } from '@angular/core';
import { Router } from "@angular/router";
import { HttpClient } from "@angular/common/http";
import { Select, Store } from "@ngxs/store";
import { SetBikes } from "../../../store/actions/bikes.actions";
import { BikeApiService } from "../../../shared/services/bike-api.service";
import { LocationsState } from "../../../store/slices/locations.slice";
import { Observable } from "rxjs";
import { IBike } from "../../../models/bike.model";

@Component({
  selector: 'app-search-bike-btn',
  templateUrl: './search-bike-btn.component.html',
  styleUrls: ['./search-bike-btn.component.scss']
})
export class SearchBikeBtnComponent {
  @Select(LocationsState.getSelectedLocationLatitude) selectedLocationLatitude$!: Observable<number | 0>;

  @Select(LocationsState.getSelectedLocationLongitude) selectedLocationLongitude$!: Observable<number | 0>;

  longitude: number = 0;
  latitude: number = 0;

  constructor(
    private router: Router,
    private http: HttpClient,
    private store: Store,
    private bikeApiService: BikeApiService,
  ) {
    this.selectedLocationLatitude$.subscribe((latitude) => {
      this.latitude = latitude;
    });
    this.selectedLocationLongitude$.subscribe((longitude) => {
      this.longitude = longitude;
    });
  }

  goToBikeSearch() {
    this.bikeApiService.fetchBikesByLongitudeAndLatitude(this.latitude, this.longitude)
      .subscribe((bikes) => {
        this.store.dispatch(new SetBikes(bikes as IBike[]));
      });
    this.router.navigate(['/bikes']);
  }
}
