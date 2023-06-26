import { Component, OnInit } from '@angular/core';
import { Observable } from "rxjs";
import { Select } from "@ngxs/store";
import { LocationsState } from "../../../store/slices/locations.slice";

@Component({
  selector: 'app-google-map',
  templateUrl: './google-map.component.html',
  styleUrls: ['./google-map.component.scss']
})
export class GoogleMapComponent implements OnInit {
  @Select(LocationsState.getSelectedLocationLatitude) latitude$!: Observable<number | 0>;

  @Select(LocationsState.getSelectedLocationLongitude) longitude$!: Observable<number | 0>;

  currentLocation = navigator.geolocation.getCurrentPosition((position) => {
    console.log(position);
    return position;
  });

  latitude: number = 0;
  longitude: number = 0;

  zoom = 12;
  center: google.maps.LatLngLiteral = {lat: this.latitude, lng: this.longitude};
  options: google.maps.MapOptions = {
    mapTypeId: 'hybrid',
    zoomControl: false,
    scrollwheel: false,
    disableDoubleClickZoom: true,
    maxZoom: 15,
    minZoom: 8,
    // center: {lat: 37.7749, lng: -122.4194},
  };

  constructor() {
    this.latitude$.subscribe((latitude) => {
      this.latitude = latitude;
    });
    this.longitude$.subscribe((longitude) => {
      this.longitude = longitude;
    });
  }

  ngOnInit() {
    this.options.center = {lat: this.latitude, lng: this.longitude};
  }
}
