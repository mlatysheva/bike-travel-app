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

  ngOnInit() {
    this.locationPhotos$.subscribe((photos) => {
        photos.length > 4 ? 4 : photos.length;
        this.sliderConfig = {
          ...this.sliderConfig,
          slidesToScroll: photos.length > 4 ? 4 : photos.length,
        }
      }
    );
  }
}
