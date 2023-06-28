import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
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

  selectedLocationLatitude!: number;
  selectedLocationLongitude!: number;

  ngOnInit() {
    this.selectedLocationLatitude$.subscribe((latitude) => {
      this.selectedLocationLatitude = latitude;
      console.log('in selected location page latitude is: ', this.selectedLocationLatitude);
    });
    this.selectedLocationLongitude$.subscribe((longitude) => {
      this.selectedLocationLongitude = longitude;
      console.log('in selected location page longitude is: ', this.selectedLocationLongitude);
    });
  }
}
