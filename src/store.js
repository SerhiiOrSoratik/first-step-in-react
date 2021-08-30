import { applyMiddleware, compose, createStore } from "redux";
import ReduxThunk from "redux-thunk";
import allReducers from "./reducers";


export const store = createStore(allReducers, applyMiddleware(ReduxThunk));