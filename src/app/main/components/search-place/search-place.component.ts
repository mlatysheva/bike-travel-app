import { Component } from '@angular/core';
import { Store } from '@ngxs/store';
import { SetSearchQuery} from "../../../store/actions/search.actions";
import { TripadvisorAPIService } from "../../../shared/services/tripadvisor-api.service";
import { SetLocations } from "../../../store/actions/locations.actions";
import {Router} from "@angular/router";

@Component({
  selector: 'app-search-place',
  templateUrl: './search-place.component.html',
  styleUrls: ['./search-place.component.scss']
})
export class SearchPlaceComponent {

  searchQuery: string = '';

  constructor(
    private store: Store,
    private tripadvisorApiService: TripadvisorAPIService,
    private router: Router,
  ) {}

  onSearch()  {
    this.store.dispatch(new SetSearchQuery(this.searchQuery))
      .subscribe(() => {
        this.tripadvisorApiService.fetchLocations(this.searchQuery)
          .subscribe((locations) => this.store.dispatch(new SetLocations(locations.data)))
      });
    this.router.navigate(['/locations']);
  }
}
