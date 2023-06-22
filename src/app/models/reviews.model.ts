export interface IReview {
  id: number;
  lang?: string;
  location_id: number;
  published_date?: string;
  rating?: number;
  helpful_votes?: number;
  rating_image_url?: string;
  url?: string;
  trip_type?: string;
  travel_date?: string;
  text?: string;
  title?: string;
  owner_response?: string;
  is_machine_translated?: boolean;
  user?: any;
  subratings?: any;
}

export interface IReviewsResponse {
  data: IReview[];
}
