import { State, Action, StateContext } from "@ngxs/store";
import { LocationsStateModel } from "../state.model";
import { SetLocations } from "../actions/locations.actions";
import { Injectable } from "@angular/core";
@Injectable()
@State<LocationsStateModel>({
  name: 'locations',
  defaults: {
    fetchedLocations: [],
  }
})
export class LocationsState {
  @Action(SetLocations)
  setLocations(ctx: StateContext<LocationsStateModel>, action: SetLocations) {
    const state = ctx.getState();
    ctx.setState({
      ...state,
      fetchedLocations: action.locations
    });
  }
}
