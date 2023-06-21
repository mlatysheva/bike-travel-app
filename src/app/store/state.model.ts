import {ILocation, ILocationData} from "../models/location.model";

export interface AppStateModel {
  searchQuery: string,
  locations: ILocation[],
}

export interface SearchStateModel {
  searchQuery: string,
}

export interface LocationsStateModel {
  fetchedLocations: ILocation[],
  selectedLocation: ILocationData | null,
}
