import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunkMiddleware from "redux-thunk";
import { songsReducer } from "./Songs/reducer";
import { tracksReducer } from "./Track/reducer";

const rootReducer = combineReducers({
  TrackDetails: tracksReducer,
  SongsData: songsReducer,
});

export function configureStore() {
  const middlewares = [thunkMiddleware];

  const middleWareEnhancer = applyMiddleware(...middlewares);

  const store = createStore(
    rootReducer,
    composeWithDevTools(middleWareEnhancer)
  );
  return store;
}
