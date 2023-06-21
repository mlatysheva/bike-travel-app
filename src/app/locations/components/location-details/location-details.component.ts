import { Component } from '@angular/core';
import { ILocationDetails } from "../../../models/location.model";
import { Select } from "@ngxs/store";
import { LocationsState } from "../../../store/slices/locations.slice";
import { Observable } from "rxjs";
import {IPhoto} from "../../../models/photos.model";

@Component({
  selector: 'app-location-details',
  templateUrl: './location-details.component.html',
  styleUrls: ['./location-details.component.scss']
})
export class LocationDetailsComponent {
  @Select(LocationsState.getSelectedLocationDetails) locationDetails$!: Observable<ILocationDetails>;
  constructor() { }
}
