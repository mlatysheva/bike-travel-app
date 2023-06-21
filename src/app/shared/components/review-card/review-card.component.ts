import { Component, Input } from '@angular/core';
import { IReview } from "../../../models/reviews.model";

@Component({
  selector: 'app-review-card',
  templateUrl: './review-card.component.html',
  styleUrls: ['./review-card.component.scss']
})
export class ReviewCardComponent {
  @Input() review!: IReview;
}
