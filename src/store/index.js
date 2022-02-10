import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunkMiddleware from "redux-thunk";
import rootReducer from "./rootReducer";

export default function configureStore(preloadedStte) {
  const middlewares = [thunkMiddleware];
  const middlewaresEnhancer = applyMiddleware(...middlewares);

  const enhancers = [middlewaresEnhancer];
  const composedEnhancers = composeWithDevTools(...enhancers);

  const store = createStore(rootReducer, preloadedStte, composedEnhancers);

  return store;
}
