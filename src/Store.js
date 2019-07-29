import { createStore, combineReducers, applyMiddleware } from "redux";
import { createLogger } from "redux-logger";
import thunk from "redux-thunk";
import promise from "redux-promise-middleware";
import NotesReducer from "./Reducers/NotesReducer.js";

const Store = createStore(
  combineReducers({ NotesReducer }),

  applyMiddleware(createLogger(), thunk, promise)
);

export default Store;
