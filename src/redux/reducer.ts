import { FILTER_TICKETS, SORT_FASTERS, SORT_OPTIMAL, SORT_PRICE } from './actionTypes';
import tickets from '../tickets.json';

interface Ticket {
  price: number;
  priceLabel: string;
  firstFryTime: string;
  firstFryTransit: string;
  transfersNumber: number;
  transfersLabel: string;
  transfersList: string;
  fullTimeFry: number;
  secondFryTime: string;
  secondFlyTransit: string;
}

interface AppState {
  tickets: Ticket[];
}

const initialState: AppState = {
  tickets: tickets,
};

const appReducer = (state: AppState = initialState, action: any) => {
  switch (action.type) {
    case SORT_PRICE:
      return {
        ...state,
        tickets: [...state.tickets].sort((a, b) => a.price - b.price),
      };

    case SORT_FASTERS:
      return {
        ...state,
        tickets: [...state.tickets].sort((a, b) => a.fullTimeFry - b.fullTimeFry),
      };

    case SORT_OPTIMAL:
      return {
        ...state,
        tickets: [...state.tickets].sort((a, b) => a.price - b.price)
        .sort((a, b) => a.fullTimeFry - b.fullTimeFry)
        .sort((a, b) => a.transfersNumber - b.transfersNumber)
      };

    case FILTER_TICKETS:
        return {
          tickets: initialState.tickets.filter(flight => action.payload.filterData.includes(flight.transfersNumber))
        };

    default:
      return state;
  }
};

export default appReducer;
