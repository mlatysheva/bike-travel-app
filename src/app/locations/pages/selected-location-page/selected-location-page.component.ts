import { Component, OnInit } from '@angular/core';
import { combineLatest, Observable } from 'rxjs';
import { Select } from '@ngxs/store';
import { LocationsState } from '../../../store/slices/locations.slice';

@Component({
  selector: 'app-selected-location-page',
  templateUrl: './selected-location-page.component.html',
  styleUrls: ['./selected-location-page.component.scss'],
})
export class SelectedLocationPageComponent implements OnInit {
  @Select(LocationsState.getSelectedLocationLatitude) selectedLocationLatitude$!: Observable<number>;
  @Select(LocationsState.getSelectedLocationLongitude) selectedLocationLongitude$!: Observable<number>;

  latLong$!: Observable<[number, number]>;

  loading = true;

  ngOnInit() {
    this.loading = true;
    this.latLong$ = combineLatest([this.selectedLocationLatitude$, this.selectedLocationLongitude$]);
    setTimeout(() => {
      this.loading = false;
    }, 1000);
  }
}
