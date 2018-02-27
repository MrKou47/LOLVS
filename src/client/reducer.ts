import { combineReducers } from 'redux';
import homeReducer from './containers/home/reducer';

const rootReducer = combineReducers({
  home: homeReducer,
});

export default rootReducer;
