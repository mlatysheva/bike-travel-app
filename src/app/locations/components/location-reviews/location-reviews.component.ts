import { Component } from '@angular/core';
import {Select} from "@ngxs/store";
import {LocationsState} from "../../../store/slices/locations.slice";
import {IReview} from "../../../models/reviews.model";
import {Observable} from "rxjs";

@Component({
  selector: 'app-location-reviews',
  templateUrl: './location-reviews.component.html',
  styleUrls: ['./location-reviews.component.scss']
})
export class LocationReviewsComponent {
  @Select(LocationsState.getSelectedLocationReviews) locationReviews$!: Observable<IReview[]>;

  @Select(LocationsState.getSelecteLocationRatingImage) ratingImageUrl$!: Observable<string>;
}
