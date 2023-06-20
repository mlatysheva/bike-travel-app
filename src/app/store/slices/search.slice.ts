import { State, Action, StateContext } from "@ngxs/store";
import { SearchStateModel } from "../state.model";
import { SetSearchQuery } from "../actions/search.actions";
import { Injectable } from "@angular/core";
@Injectable()
@State<SearchStateModel>({
  name: 'search',
  defaults: {
    searchQuery: '',
  }
})
export class SearchState {
  @Action(SetSearchQuery)
  setSearchQuery(ctx: StateContext<SearchStateModel>, action: SetSearchQuery) {
    const state = ctx.getState();
    ctx.setState({
      ...state,
      searchQuery: action.searchQuery
    });
  }
}
