import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { ILocationData } from '../../../models/location.model';
import { Select } from '@ngxs/store';
import { LocationsState } from '../../../store/slices/locations.slice';

@Component({
  selector: 'app-selected-location-page',
  templateUrl: './selected-location-page.component.html',
  styleUrls: ['./selected-location-page.component.scss'],
})
export class SelectedLocationPageComponent {
  @Select(LocationsState.getSelectedLocation)
  locationData$!: Observable<ILocationData>;
}
