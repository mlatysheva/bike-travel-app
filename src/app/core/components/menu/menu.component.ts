import { Component, OnInit, LOCALE_ID, Inject } from '@angular/core';
import { Select } from '@ngxs/store';
import { LocationsState } from '../../../store/slices/locations.slice';
import { Observable } from 'rxjs';
import { BikesState } from "../../../store/slices/bikes.slice";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {
  @Select(LocationsState.getLocationsCount) locationsCount$!: Observable<
    number | 0
  >;

  @Select(LocationsState.getSelectedLocationId)
  selectedLocationId$!: Observable<number | null>;

  @Select(BikesState.getBikesCount) bikesCount$!: Observable<number | 0>;

  @Select(BikesState.getSelectedBikeId) selectedBikeId$!: Observable<number | null>;

  bike_id: number | null;

  currentLanguage: string;

  constructor(
    @Inject(LOCALE_ID) protected localeId: string,
  ) {
    this.currentLanguage = this.localeId;
  }

  ngOnInit() {
    this.selectedBikeId$.subscribe((id) => {
      this.bike_id = id;
    });
  }

  changeLanguage(language: string) {
    const url = document.location.pathname + document.location.search;
    // document.location.href = url.replace(this.currentLanguage, language);
    document.location.href = `/${language}${url}`;
  }

  toggleMenu() {
    const menu = document.querySelector('.menu');
    menu?.classList.toggle('active');
    const hamburger = document.querySelector('.hamburger');
    hamburger?.classList.toggle('active');
  }

  closeMenu() {
    const menu = document.querySelector('.menu');
    menu?.classList.remove('active');
    const hamburger = document.querySelector('.hamburger');
    hamburger?.classList.remove('active');
  }
}
