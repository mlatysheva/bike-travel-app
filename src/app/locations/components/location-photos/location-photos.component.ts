import { Component } from '@angular/core';
import { Select } from "@ngxs/store";
import { LocationsState } from "../../../store/slices/locations.slice";
import { Observable } from "rxjs";
import { IPhoto } from "../../../models/photos.model";

@Component({
  selector: 'app-location-photos',
  templateUrl: './location-photos.component.html',
  styleUrls: ['./location-photos.component.scss']
})
export class LocationPhotosComponent {
  @Select(LocationsState.getSelectedLocationPhotos) locationPhotos$!: Observable<IPhoto[]>;

  sliderConfig = {
    slidesToShow: 1,
    slidesToScroll: this.locationPhotos$.subscribe((photos) => photos.length > 4 ? 4 : photos.length),
    autoplay: true,
    autoplaySpeed: 2000,
    dots: true,
    infinite: false,
  }

  slickInit(e: any) {
    console.log('slick initialized');
  }

  breakpoint(e: any) {
    console.log('breakpoint');
  }

  afterChange(e: any) {
    console.log('afterChange');
  }

  beforeChange(e: any) {
    console.log('beforeChange');
  }
}


