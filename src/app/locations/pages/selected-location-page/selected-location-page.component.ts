import {Component, OnInit} from '@angular/core';
import { Observable } from "rxjs";
import {ILocationData, ILocationDetails} from "../../../models/location.model";
import { Store } from "@ngxs/store";
import { IPhoto } from "../../../models/photos.model";
import { IReview } from "../../../models/reviews.model";

@Component({
  selector: 'app-selected-location-page',
  templateUrl: './selected-location-page.component.html',
  styleUrls: ['./selected-location-page.component.scss']
})
export class SelectedLocationPageComponent implements OnInit {
  locationData$: Observable<ILocationData> = this.store.select(state => state.locations.selectedLocation);
  details$: ILocationDetails | undefined;
  // photos$: Observable<IPhoto[]>;
  // reviews$: Observable<IReview[]>;

  constructor(private store: Store) {
    this.locationData$ = this.store.select(state => state.locations.selectedLocation);
  }

  ngOnInit(): void {
    this.locationData$.subscribe((data) => {
      console.log(data);
      // this.details$ = data.details;
    });
  }
}
