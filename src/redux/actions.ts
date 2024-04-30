import { 
  SORT_PRICE,
  SORT_FASTERS,
  SORT_OPTIMAL,
  FILTER_TICKETS,
} from './actionTypes';

export const sortPrice = () => ({
  type: SORT_PRICE,
});

export const sortFasters = () => ({
  type: SORT_FASTERS,
});

export const sortOptimal = () => ({
  type: SORT_OPTIMAL,
});

export const filterTickets = (filterData: number[]) => ({
  type: FILTER_TICKETS,
  payload: {filterData}
});