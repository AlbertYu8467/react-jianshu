import { createStore,applyMiddleware, compose } from 'redux';
import reducer from './reducer';
import mySaga from "./sagas";
import createSagaMiddleware from 'redux-saga'
const sagaMiddleware = createSagaMiddleware()
// import thunk  from "redux-thunk";
const composeEnhancers =   window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?   
window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
}) : compose;
const enhancer = composeEnhancers(
  applyMiddleware(sagaMiddleware),
);
const store = createStore(
  reducer,
  enhancer
)
sagaMiddleware.run(mySaga)
export default store