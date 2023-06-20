import { Component } from '@angular/core';
import { Store } from '@ngxs/store';
import { SetSearchQuery} from "../../../store/actions/search.actions";

@Component({
  selector: 'app-search-place',
  templateUrl: './search-place.component.html',
  styleUrls: ['./search-place.component.scss']
})
export class SearchPlaceComponent {

  searchQuery: string = '';

  constructor(private store: Store) {}

  onSearch()  {
    console.log('searchQuery', this.searchQuery);
    this.store.dispatch(new SetSearchQuery(this.searchQuery)).subscribe(() => console.log('dispatched'));
  }
}
