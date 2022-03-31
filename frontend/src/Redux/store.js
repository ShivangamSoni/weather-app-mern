import { createStore, combineReducers, applyMiddleware } from "redux";

import ReduxThunkMiddleware from "redux-thunk";

import SiteReducer from "./Site";
import WeatherReducer from "./Weather";

const rootReducer = combineReducers({ site: SiteReducer, weather: WeatherReducer });

export default createStore(rootReducer, applyMiddleware(ReduxThunkMiddleware));
