import { ActionTypes } from './actionTypes';

export interface SortDataAction {
  type: ActionTypes.SORT_DATA;
  payload: string[];
}

export const sortData = (sortedData: string[]): SortDataAction => ({
  type: ActionTypes.SORT_DATA,
  payload: sortedData,
});
