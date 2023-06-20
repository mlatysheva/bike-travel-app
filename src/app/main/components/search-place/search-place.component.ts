import { Component } from '@angular/core';

@Component({
  selector: 'app-search-place',
  templateUrl: './search-place.component.html',
  styleUrls: ['./search-place.component.scss']
})
export class SearchPlaceComponent {

  searchQuery: string = '';
  itemFilterText$: string = '';

  onSearch(query: string)  {
    console.log('searchquery: ', query);
  }
}
