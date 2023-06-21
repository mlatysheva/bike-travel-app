import { Component, Input, OnInit } from '@angular/core';
import { ILocationDetails } from "../../../models/location.model";
import { Select, Store } from "@ngxs/store";
import { LocationsState } from "../../../store/slices/locations.slice";
import {Observable} from "rxjs";

@Component({
  selector: 'app-location-details',
  templateUrl: './location-details.component.html',
  styleUrls: ['./location-details.component.scss']
})
export class LocationDetailsComponent implements OnInit {
  // @Input() locationDetails!: ILocationDetails;
  @Select(LocationsState.getSelectedLocationDetails) locationDetails$!: Observable<ILocationDetails>;

  constructor(
    private store: Store,
  ) { }

  ngOnInit(): void {
    this.locationDetails$.subscribe((data) => {
      console.log(data);
    });
  }
}
