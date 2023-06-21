import {ILocation, ILocationData} from "../../models/location.model";

export class SetLocations {
  static readonly type = '[Search] Set locations';
  constructor(public locations: ILocation[]) {}
}

export class SetSelectedLocation {
  static readonly type = '[Locations List] Set Selected Location';
  constructor(public location: ILocationData) {}
}
