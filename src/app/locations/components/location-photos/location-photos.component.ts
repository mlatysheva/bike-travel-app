import { Component } from '@angular/core';
import { Select } from '@ngxs/store';
import { LocationsState } from '../../../store/slices/locations.slice';
import { Observable } from 'rxjs';
import { IPhoto } from '../../../models/photos.model';

@Component({
  selector: 'app-location-photos',
  templateUrl: './location-photos.component.html',
  styleUrls: ['./location-photos.component.scss'],
})
export class LocationPhotosComponent {
  @Select(LocationsState.getSelectedLocationPhotos)
  locationPhotos$!: Observable<IPhoto[]>;

  sliderConfig = {
    slidesToShow: 1,
    slidesToScroll: this.locationPhotos$.subscribe((photos) =>
      photos.length > 4 ? 4 : photos.length
    ),
    autoplay: false,
    dots: true,
    infinite: false,
  };
}
