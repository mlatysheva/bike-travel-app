import { State, Action, StateContext } from "@ngxs/store";
import { StateModel } from "../state.model";
import { SetSearchQuery } from "../actions/search.actions";
import {Injectable} from "@angular/core";
@Injectable()
@State<StateModel>({
  name: 'whereToGo',
  defaults: {
    searchQuery: ''
  }
})
export class SearchState {
  @Action(SetSearchQuery)
  setSearchQuery(ctx: StateContext<StateModel>, action: SetSearchQuery) {
    const state = ctx.getState();
    console.log('state', state);
    console.log('action', action);
    ctx.setState({
      ...state,
      searchQuery: action.searchQuery
    });
  }
}
