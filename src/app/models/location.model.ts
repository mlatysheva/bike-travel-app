import {IReview} from "./reviews.model";
import {IPhoto} from "./photos.model";

export interface ILocation {
  location_id: string,
  name: string,
  address_obj: IAddressObject,
}

export interface IAddressObject {
  street1?: string,
  street2?: string,
  city?: string,
  country?: string,
  postalcode?: string,
  address_string?: string,
  state?: string,
}

export interface IAncestor {
  abbrv?: string,
  level?: number,
  location_id?: number,
  name?: string,
}

export interface ILocationDetails {
  location_id: string,
  name: string,
  description?: string,
  web_url?: string,
  address_obj?: IAddressObject,
  ancestors?: IAncestor[],
  latitude?: string,
  longitude?: string,
  timezone?: string,
  email?: string,
  phone?: string,
  website?: string,
  write_review?: string,
  ranking_data?: any,
  rating?: number,
  rating_image_url?: string,
  num_reviews?: string,
  review_rating_count?: any,
  subratings: any,
  photo_count?: number,
  see_all_photos?: string,
  price_level?: string,
  hours?: any,
  amenities?: any,
  features?: any,
  cousine?: any,
  parent_brand?: string,
  brand?: string,
  category?: any,
  subcategory?: any,
  groups?: any,
  styles?: any,
  neighborhood_info?: any,
  trip_types?: any,
  awards?: any,
}

export interface ILocationData {
  details: ILocationDetails,
  photos: IPhoto[],
  reviews: IReview[],
}
