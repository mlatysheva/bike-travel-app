import { State, Action, StateContext } from '@ngxs/store';
import { LocationsStateModel } from '../state.model';
import {
  SetLocations,
  SetSelectedLocation,
} from '../actions/locations.actions';
import { Injectable } from '@angular/core';
import { Selector } from '@ngxs/store';

@Injectable()
@State<LocationsStateModel>({
  name: 'locations',
  defaults: {
    fetchedLocations: [],
    selectedLocation: null,
  },
})
export class LocationsState {
  @Action(SetLocations)
  setLocations(ctx: StateContext<LocationsStateModel>, action: SetLocations) {
    const state = ctx.getState();
    ctx.setState({
      ...state,
      fetchedLocations: action.locations,
    });
  }

  @Action(SetSelectedLocation)
  setSelectedLocation(
    ctx: StateContext<LocationsStateModel>,
    action: SetSelectedLocation
  ) {
    const state = ctx.getState();
    ctx.setState({
      ...state,
      selectedLocation: action.location,
    });
  }

  @Selector()
  static getLocations(state: LocationsStateModel) {
    return state.fetchedLocations;
  }

  @Selector()
  static getLocationsCount(state: LocationsStateModel) {
    return state.fetchedLocations.length;
  }

  @Selector()
  static getSelectedLocation(state: LocationsStateModel) {
    return state.selectedLocation;
  }

  @Selector()
  static getSelectedLocationId(state: LocationsStateModel) {
    return state.selectedLocation?.details.location_id;
  }

  @Selector()
  static getSelectedLocationPhotos(state: LocationsStateModel) {
    return state.selectedLocation?.photos;
  }

  @Selector()
  static getSelectedLocationReviews(state: LocationsStateModel) {
    return state.selectedLocation?.reviews;
  }

  @Selector()
  static getSelectedLocationDetails(state: LocationsStateModel) {
    return state.selectedLocation?.details;
  }

  @Selector()
  static getSelectedLocationRatingImage(state: LocationsStateModel) {
    return state.selectedLocation?.details.rating_image_url;
  }

  @Selector()
  static getSelectedLocationLongitude(state: LocationsStateModel) {
    return state.selectedLocation?.details.longitude;
  }

  @Selector()
  static getSelectedLocationLatitude(state: LocationsStateModel) {
    return state.selectedLocation?.details.latitude;
  }
}
