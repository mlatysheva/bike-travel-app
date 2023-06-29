import { ILocation, ILocationData } from '../models/location.model';
import { IBike } from "../models/bike.model";

export interface SearchStateModel {
  searchQuery: string;
}

export interface LocationsStateModel {
  fetchedLocations: ILocation[];
  selectedLocation: ILocationData | null;
}

export interface BikesStateModel {
  stolenBikes: IBike[];
  selectedBike: IBike | null;
}

export interface TheftStateModel {
  stolenBike: IBike | null;
  dirty: boolean;
  status: string;
  errors: any;
}
