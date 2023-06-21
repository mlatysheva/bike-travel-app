import { Component } from '@angular/core';
import { Select } from "@ngxs/store";
import { LocationsState } from "../../../store/slices/locations.slice";
import { Observable } from "rxjs";

@Component({
  selector: 'app-locations-page',
  templateUrl: './locations-page.component.html',
  styleUrls: ['./locations-page.component.scss']
})
export class LocationsPageComponent {
  @Select(LocationsState.getLocationsCount) locationsCount$!: Observable<number>;
}
