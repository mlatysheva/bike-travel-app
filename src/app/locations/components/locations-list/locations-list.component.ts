import { Component } from '@angular/core';
import { Select } from '@ngxs/store';
import { LocationsState } from '../../../store/slices/locations.slice';
import { Observable } from 'rxjs';
import { ILocation } from '../../../models/location.model';

@Component({
  selector: 'app-locations-list',
  templateUrl: './locations-list.component.html',
  styleUrls: ['./locations-list.component.scss'],
})
export class LocationsListComponent {
  @Select(LocationsState.getLocations)
  locations$!: Observable<ILocation[]>;
}
