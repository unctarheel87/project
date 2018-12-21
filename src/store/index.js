import { createStore } from "redux";
import reducer from "../reducers/beers";

const initialState = { 
  beers: []
};

export const store = createStore(reducer, initialState);