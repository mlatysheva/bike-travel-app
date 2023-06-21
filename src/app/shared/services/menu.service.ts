import { Injectable } from '@angular/core';
import { Select } from "@ngxs/store";
import { LocationsState } from "../../store/slices/locations.slice";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class MenuService {
  @Select(LocationsState.getLocations) locationsCount$!: Observable<number>;

  @Select(LocationsState.getSelectedLocationId) selectedLocationId$!: Observable<number | null>;

  showOrte: boolean = false;

  showDetails: boolean = false;

  constructor() {
    this.locationsCount$.subscribe((locations) => {
      if (locations > 0) {
        this.showOrte = true;
      }
    });

    this.selectedLocationId$.subscribe((locationId) => {
      if (locationId) {
        this.showDetails = true;
      }
    });
  }
}
