import { Component } from '@angular/core';
import { Select } from '@ngxs/store';
import { LocationsState } from '../../../store/slices/locations.slice';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent {
  @Select(LocationsState.getLocationsCount) locationsCount$!: Observable<
    number | 0
  >;

  @Select(LocationsState.getSelectedLocationId)
  selectedLocationId$!: Observable<number | null>;
}
