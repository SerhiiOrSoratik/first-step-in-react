import { applyMiddleware, compose, createStore } from "redux";
import ReduxThunk from "redux-thunk";
import allReducers from "./reducers";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(allReducers, compose(applyMiddleware(ReduxThunk), composeEnhancers()));