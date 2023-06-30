import { Injectable } from '@angular/core';
import { bikeUrl } from "../../constants/bikeUrl";
import { HttpClient } from "@angular/common/http";
import { environment } from '../../../environments/environment';
import { filter, map, take } from "rxjs/operators";
import { forkJoin, Observable } from "rxjs";
import { IManufacturer } from "../../models/manufacturer.model";
import { Store } from "@ngxs/store";
import { SetBikeTypes, SetFrameColors, SetManufacturers } from "../../store/actions/bikes.actions";
import { IColor } from "../../models/color.model";
import { IBikeType } from "../../models/bikeType.model";

@Injectable({
  providedIn: 'root'
})
export class BikeApiService {
  private bikeUrl = bikeUrl;

  constructor(
    private http: HttpClient,
    private store: Store,
  ) {
  }

  fetchBikesByLongitudeAndLatitude(latitude: number, longitude: number) {
    return this.http.get(`${this.bikeUrl}search?page=1&per_page=25&location=${latitude}%2C${longitude}&distance=10&stolenness=proximity&access_token=${environment.bikeApiKey}`)
      .pipe(
        map((bikes: any) => {
          return bikes.bikes;
        })
      );
  }

  getManufacturers(): Observable<IManufacturer[]> {
    return this.http.get(`${this.bikeUrl}manufacturers?page=1&per_page=1000&access_token=${environment.bikeApiKey}`)
      .pipe(take(1),
        map((response: any) => {
          // Filter and return the manufacturers with ID below 100
          return response.manufacturers
            .filter((manufacturer: any) => manufacturer.id < 100)
            .slice(0, 100);
        })
      );
  }

  getPopularManufacturers(): Observable<IManufacturer[]> {
    const totalPages = 20; // Total number of pages to fetch

    const pageRequests = Array.from({ length: totalPages }, (_, index) => {
      const url = `${this.bikeUrl}manufacturers?page=${index + 1}&per_page=100`;
      return this.http.get<any>(url);
    });

    return forkJoin(pageRequests).pipe(
      map((responses: any[]) => {
        const combinedManufacturers = responses.reduce(
          (manufacturers: any[], response: any) => [...manufacturers, ...response.manufacturers],
          []
        );

        const filteredManufacturers = combinedManufacturers.filter((manufacturer: IManufacturer) => manufacturer.id < 100);
        this.store.dispatch(new SetManufacturers(filteredManufacturers));
        return filteredManufacturers;
      })
    );
  }

  getFrameColors(): Observable<IColor[]> {
    return this.http.get(`${this.bikeUrl}selections/colors?access_token=${environment.bikeApiKey}`)
      .pipe(take(1),
        map((response: any) => {
          this.store.dispatch(new SetFrameColors(response.colors));
          return response.colors;
        })
      );
  }

  getBikeTypes(): Observable<IBikeType[]> {
    return this.http.get(`${this.bikeUrl}selections/cycle_types?access_token=${environment.bikeApiKey}`)
      .pipe(take(1),
        map((response: any) => {
          console.log(response.cycle_types);
          this.store.dispatch(new SetBikeTypes(response.cycle_types));
          return response.cycle_types;
        })
      );
  }
}
