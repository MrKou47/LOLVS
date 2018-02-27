import { Action, Dispatch } from 'redux';

export interface IAction extends Action {
  payload?: any;
}

export type IHybirdProps<T> = { dispatch: Dispatch<any> } & T;
