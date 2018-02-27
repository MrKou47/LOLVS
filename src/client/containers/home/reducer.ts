import { Action } from 'redux';
import { TOGGLE_SEARCH } from './action';

interface ICustomerAction extends Action {
  payload?: any;
}

export interface IHomeState {
  searching: boolean;
}

const initialState: IHomeState = {
  searching: false,
};

export default (state: IHomeState = initialState, action: ICustomerAction): IHomeState => {
  const { type, payload } = action;
  switch (type) {
    case TOGGLE_SEARCH:
      return { ...state, searching: !state.searching };
    default:
      return state;
  }
};
