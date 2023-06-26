import {Injectable} from '@angular/core';
import {bikeUrl} from "../../constants/bikeUrl";
import {HttpClient} from "@angular/common/http";
import {environment} from '../../../environments/environment';
import {map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class BikeApiService {
  private bikeUrl = bikeUrl;

  constructor(private http: HttpClient) {
  }

  fetchBikesByLongitudeAndLatitude(latitude: number, longitude: number) {
    return this.http.get(`${this.bikeUrl}search?page=1&per_page=25&location=${latitude}%2C${longitude}&distance=10&stolenness=proximity&access_token=${environment.bikeApiKey}`)
      .pipe(
        map((bikes: any) => {
          return bikes.bikes;
        })
      );
  }
}
