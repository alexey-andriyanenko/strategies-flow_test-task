import { combineReducers, createStore } from "redux";

import { strategiesReducer } from "store/reducers";

const reducers = combineReducers({
  strategies: strategiesReducer,
});

export const store = createStore(reducers);
