import { State, Action, StateContext } from '@ngxs/store';
import { BikesStateModel } from '../state.model';
import {
  SetBikes,
  SetSelectedBike,
} from '../actions/bikes.actions';
import { Injectable } from '@angular/core';
import { Selector } from '@ngxs/store';
import { IBike } from "../../models/bike.model";

@Injectable()
@State<BikesStateModel>({
  name: 'bikes',
  defaults: {
    stolenBikes: [],
    selectedBike: null,
  },
})
export class BikesState {
  @Action(SetBikes)
  setBikes(ctx: StateContext<BikesStateModel>, action: SetBikes) {
    const state = ctx.getState();
    ctx.setState({
      ...state,
      stolenBikes: action.bikes,
    });
  }

  @Action(SetSelectedBike)
  setSelectedBike(
    ctx: StateContext<BikesStateModel>,
    action: SetSelectedBike
  ) {
    const state = ctx.getState();
    ctx.setState({
      ...state,
      selectedBike: action.bike,
    });
  }

  @Selector()
  static getBikes(state: BikesStateModel) {
    return state.stolenBikes;
  }

  @Selector()
  static getBikesCount(state: BikesStateModel) {
    return state.stolenBikes.length;
  }

  @Selector()
  static getSelectedBike(state: BikesStateModel) {
    return state.selectedBike;
  }

  @Selector()
  static getSelectedBikeId(state: BikesStateModel) {
    return state.selectedBike?.id;
  }

  @Selector()
  static getBikeById(state: BikesStateModel) {
    return (id: number) =>
      state.stolenBikes.find((bike) => bike.id === id);
  }

  @Selector()
  static getStolenBikeLatitude(state: BikesStateModel) {
    if (!state.selectedBike?.stolen_coordinates) return null;
    return state.selectedBike?.stolen_coordinates[0];
  }

  @Selector()
  static getStolenBikeLongitude(state: BikesStateModel) {
    if (!state.selectedBike?.stolen_coordinates) return null;
    return state.selectedBike?.stolen_coordinates[1];
  }
}
