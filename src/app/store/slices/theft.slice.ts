import { State, Action, StateContext } from '@ngxs/store';
import { TheftStateModel } from '../state.model';
import {
  SetStolenBike, SubmitTheftReport, UpdateFormValue,
} from '../actions/theft.actions';
import { Injectable } from '@angular/core';
import { Selector } from '@ngxs/store';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
@State<TheftStateModel>({
  name: 'theftReport',
  defaults: {
    model: null,
    dirty: false,
    status: '',
    errors: null,
  },
})
export class TheftState {

  @Action(SetStolenBike)
  setStolenBike(ctx: StateContext<TheftStateModel>, action: SetStolenBike) {
    const state = ctx.getState();
    ctx.setState({
      ...state,
      model: action.bike,
    });
  }

  @Action(UpdateFormValue)
  updateFormValue(
    { patchState, getState }: StateContext<TheftStateModel>,
    { payload }: UpdateFormValue
  ) {
    const state = getState();
    patchState({
      ...state,
      model: {
        ...state.model,
        id: uuidv4(),
        ...payload.model,
      }
    });
  }

  @Action(SubmitTheftReport)
  submitTheftReport(
    { patchState, getState }: StateContext<TheftStateModel>,
  ) {
    const state = getState();
    patchState({
      ...state.model,
      dirty: true,
      status: 'submitted',
    });
  }

  @Selector()
  static getStolenBike(state: TheftStateModel) {
    return state.model;
  }

  @Selector()
  static getDirty(state: TheftStateModel) {
    return state.dirty;
  }

  @Selector()
  static getStatus(state: TheftStateModel) {
    return state.status;
  }

  @Selector()
  static getErrors(state: TheftStateModel) {
    return state.errors;
  }
}
