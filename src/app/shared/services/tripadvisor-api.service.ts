import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { forkJoin, Observable } from "rxjs";
import { map } from "rxjs/operators";
import { environment } from "../../../einvironments/environment";
import { apiUrl } from "../../constants/apiUrl";
import {IReviewsResponse} from "../../models/reviews.model";

@Injectable({
  providedIn: 'root'
})
export class TripadvisorAPIService {

  private baseUrl = apiUrl;
  constructor(private http: HttpClient) { }

  fetchLocations(searchQuery: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/location/search?key=${environment.apiKey}&searchQuery=${searchQuery}&language=en`)
  }

  // fetchLocationDetails(locationId: string): Observable<any> {
  //   return this.http.get(`${this.baseUrl}/location/${locationId}/details?key=${environment.apiKey}&currency=EUR&language=en`)
  // }

  fetchLocationDetails(locationId: string): Observable<any> {
    const details$ = this.http.get(`${this.baseUrl}/location/${locationId}/details?key=${environment.apiKey}&currency=EUR&language=ge`);
    const photos$: Observable<any> = this.http.get(`${this.baseUrl}/location/${locationId}/photos?key=${environment.apiKey}`);
    const reviews$: Observable<any> = this.http.get(`${this.baseUrl}/location/${locationId}/reviews?key=${environment.apiKey}`);

    return forkJoin([details$, photos$, reviews$]).pipe(
      map(([details, photos, reviews]) => {
        // @ts-ignore
        return {
          details,
          photos: photos.data,
          reviews: reviews.data,
        }
      })
    )
  }
}
