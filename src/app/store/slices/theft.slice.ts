import { State, Action, StateContext } from '@ngxs/store';
import { TheftStateModel } from '../state.model';
import {
  SetStolenBike,
} from '../actions/theft.actions';
import { Injectable } from '@angular/core';
import { Selector } from '@ngxs/store';

@Injectable()
@State<TheftStateModel>({
  name: 'theftReport',
  defaults: {
    stolenBikeForm: {
      bike: null,
      dirty: false,
      status: '',
      errors: {},
    },
  },
})
export class TheftState {
  @Action(SetStolenBike)
  setStolenBike(ctx: StateContext<TheftStateModel>, action: SetStolenBike) {
    const state = ctx.getState();
    ctx.setState({
      ...state,
      stolenBikeForm: {
        ...state.stolenBikeForm,
        bike: action.bike,
      }
    });
  }

  @Selector()
  static getStolenBike(state: TheftStateModel) {
    return state.stolenBikeForm.bike;
  }

}
