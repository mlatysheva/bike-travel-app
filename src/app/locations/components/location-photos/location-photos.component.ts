import { Component, OnInit } from '@angular/core';
import { Select } from '@ngxs/store';
import { LocationsState } from '../../../store/slices/locations.slice';
import { Observable } from 'rxjs';
import { IPhoto } from '../../../models/photos.model';

@Component({
  selector: 'app-location-photos',
  templateUrl: './location-photos.component.html',
  styleUrls: ['./location-photos.component.scss'],
})
export class LocationPhotosComponent implements OnInit {
  @Select(LocationsState.getSelectedLocationPhotos)
  locationPhotos$!: Observable<IPhoto[]>;

  sliderConfig = {
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: false,
    dots: true,
    infinite: true,
    centerMode: true,
  };

  slickInit(e: { event: any; slick: any }) {
    console.log('slick initialized');
  }

  breakpoint(e: { event: any; slick: any; breakpoint: any }) {
    console.log('breakpoint');
  }

  afterChange(e: { event: any; slick: any; currentSlide: number; first: boolean; last: boolean }) {
    console.log('afterChange');
  }

  beforeChange(e: { event: any; slick: any; currentSlide: number; nextSlide: number }) {
    console.log('beforeChange');
  }

  ngOnInit() {
    this.locationPhotos$.subscribe((photos) => {
        photos.length > 4 ? 4 : photos.length;
        console.log(photos);
        console.log(photos.length);
        this.sliderConfig = {
          ...this.sliderConfig,
          slidesToScroll: photos.length > 4 ? 4 : photos.length,
        }
      }
    );
  }
}
