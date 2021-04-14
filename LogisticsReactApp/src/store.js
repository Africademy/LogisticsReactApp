import { createStore, applyMiddleware, compose, combineReducers } from "redux";
import thunk from "redux-thunk";
import TCBReducer from "./reducers/TCBReducer";



const initialState = {};
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  combineReducers({
    
      tvbDta:TCBReducer

  }),
  initialState,
  composeEnhancer(applyMiddleware(thunk))
);
export default store;