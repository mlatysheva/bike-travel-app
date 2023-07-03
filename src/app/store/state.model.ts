import { ILocation, ILocationData } from '../models/location.model';
import { IBike } from "../models/bike.model";
import { IColor } from "../models/color.model";
import { IBikeType } from "../models/bikeType.model";

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
  manufacturers: any[];
  frameColors: IColor[];
  bikeTypes: IBikeType[];
}

export interface TheftStateModel {
  model: IBike | null;
  dirty: boolean;
  status: string;
  errors: any;
}
