import { ActionTypes } from './actionTypes';
import tickets from './tickets.json';

export interface State {
  data: any;
}

const initialState: State = {
  data: tickets,
};

const reducer = (state: State = initialState, action: any): State => {
  switch (action.type) {
    case ActionTypes.SORT_DATA:
      return {
        ...state,
        data: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
