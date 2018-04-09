import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducer';

const win = window as any;
/**
 * middleware 作用于 action 被发起之后，到达 reducer 之前的扩展点
 * 我们使用 dispatch 方法来触发action。
 * 相对于exrepss的middleware，redux的middleware主要是对 dispatch function 做一层层的封装
 * 即，当 dispatch({ type: ACTION_NAME, payload: SOME_DATA }) 时，整个 action body 会流经所有middleware，最终到达reduer;
 * so 我们的middlware应该形如： REDUX_DISPATCH_FUNC => NEW_REDUX_DISPATCH_FUNC_EXTEND_DISPATCH
 * 
 */

const composeEnhancers = win.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  composeEnhancers(
    applyMiddleware(thunk)
  )
);

export default store;
