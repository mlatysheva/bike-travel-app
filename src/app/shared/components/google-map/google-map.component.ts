import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-google-map',
  templateUrl: './google-map.component.html',
  styleUrls: ['./google-map.component.scss']
})
export class GoogleMapComponent implements OnInit {
  @Input() latitudeInput!: number;
  @Input() longitudeInput!: number;

  zoom = 12;
  // center = {
  //   lat: this.latitudeInput,
  //   lng: this.longitudeInput,
  // };
  center!: google.maps.LatLngLiteral;
  options: google.maps.MapOptions = {
    mapTypeId: 'roadmap',
    zoomControl: false,
    scrollwheel: false,
    disableDoubleClickZoom: true,
    maxZoom: 15,
    minZoom: 8,
  };

  ngOnInit() {
    console.log(this.latitudeInput);
    console.log(this.longitudeInput);
    this.center = {
      lat: parseFloat(this.latitudeInput.toString()),
      lng: parseFloat(this.longitudeInput.toString())
    };
  }
}
