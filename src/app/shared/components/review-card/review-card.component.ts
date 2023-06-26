import { Component, Input, OnInit } from '@angular/core';
import { IReview } from '../../../models/reviews.model';
import { DatePipe } from "@angular/common";

@Component({
  selector: 'app-review-card',
  templateUrl: './review-card.component.html',
  styleUrls: ['./review-card.component.scss'],
})
export class ReviewCardComponent implements OnInit {
  @Input() review!: IReview;

  publishedDate: string = '';

  constructor(private datePipe: DatePipe) {
  }

  ngOnInit() {
    // if (this.review && this.review.published_date) {
    //   this.publishedDate = this.datePipe.transform(+this.review.published_date * 1000, 'medium') || '';
    // }
    // console.log('published date is: ', this.publishedDate);
  }

}
