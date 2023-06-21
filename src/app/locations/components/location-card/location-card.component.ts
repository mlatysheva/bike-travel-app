import { Component, Input } from '@angular/core';
import { ILocation } from "../../../models/location.model";
import { Router } from "@angular/router";
import { Store } from "@ngxs/store";
import { TripadvisorAPIService } from "../../../shared/services/tripadvisor-api.service";
import {SetSelectedLocation} from "../../../store/actions/locations.actions";
@Component({
  selector: 'app-location-card',
  templateUrl: './location-card.component.html',
  styleUrls: ['./location-card.component.scss']
})
export class LocationCardComponent {
  @Input() location?: ILocation;

  constructor(
    private router: Router,
    private store: Store,
    private tripadvisorApiService: TripadvisorAPIService,
  ) {
  }

  renderLocationDetails(id: string): void {
    const location = this.tripadvisorApiService.fetchLocationDetails(id)
      .subscribe((location) => {
        console.log(location);
        this.store.dispatch(new SetSelectedLocation(location));
      });
    // this.store.dispatch(new SetSelectedLocationId(id));
    this.router.navigate([`/locations/${id}`]);
  }
}
