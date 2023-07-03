import { State, Action, StateContext } from '@ngxs/store';
import { BikesStateModel } from '../state.model';
import {
  SetBikes, SetBikeTypes, SetFrameColors, SetManufacturers,
  SetSelectedBike,
} from '../actions/bikes.actions';
import { Injectable } from '@angular/core';
import { Selector } from '@ngxs/store';

@Injectable()
@State<BikesStateModel>({
  name: 'bikes',
  defaults: {
    stolenBikes: [],
    selectedBike: null,
    manufacturers: [],
    frameColors: [],
    bikeTypes: [],
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

  @Action(SetManufacturers)
  setManufacturers(
    ctx: StateContext<BikesStateModel>,
    action: SetManufacturers
  ) {
    const state = ctx.getState();
    ctx.setState({
      ...state,
      manufacturers: action.manufacturers,
    });
  }

  @Action(SetFrameColors)
  setFrameColors(ctx: StateContext<BikesStateModel>, action: SetFrameColors) {
    const state = ctx.getState();
    ctx.setState({
      ...state,
      frameColors: action.frameColors,
    });
  }

  @Action(SetBikeTypes)
  setBikeTypes(ctx: StateContext<BikesStateModel>, action: SetBikeTypes) {
    const state = ctx.getState();
    ctx.setState({
      ...state,
      bikeTypes: action.bikeTypes,
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
    return (id: string) =>
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

  @Selector()
  static getManufacturers(state: BikesStateModel) {
    return state.manufacturers;
  }

  @Selector()
  static getFrameColors(state: BikesStateModel) {
    return state.frameColors;
  }

  @Selector()
  static getBikeTypes(state: BikesStateModel) {
    return state.bikeTypes;
  }
}
