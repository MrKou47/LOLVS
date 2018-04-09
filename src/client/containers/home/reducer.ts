import { Action } from 'redux';
import { TOGGLE_SEARCH, UPDATE_VIDEO_LIST } from './action';

interface ICustomerAction extends Action {
  payload?: any;
}

export interface IHomeState {
  searching: boolean;
  videos: any[],
}

const initialState: IHomeState = {
  searching: false,
  videos: []
};

export default (state: IHomeState = initialState, action: ICustomerAction): IHomeState => {
  const { type, payload } = action;
  switch (type) {
    case TOGGLE_SEARCH:
      return { ...state, searching: !state.searching };
    case UPDATE_VIDEO_LIST:
      return { ...state, ...payload }
    default:
      return state;
  }
};
