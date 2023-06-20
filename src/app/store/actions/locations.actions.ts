import { Action, State, StateContext} from "@ngxs/store";
import { tap } from "rxjs/operators";
import { ILocation } from "../../models/location.model";

export class SetLocations {
  static readonly type = '[Search] Set locations';
  constructor(public locations: ILocation[]) {}
}
