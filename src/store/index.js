import { createStore } from "redux";
import reducer from "../reducers/beers";

const initialState = { 
  beers: [],
  msg: ''
};

export const store = createStore(reducer, initialState);