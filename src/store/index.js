import { combineReducers } from "@reduxjs/toolkit";
import { createStore } from "redux";
import { reducer as formReducer } from "redux-form";
import produtosSlice from "./reducers/produtos";

const rootReducer = combineReducers({
  form: formReducer,
  products: produtosSlice,
});

const store = createStore(rootReducer);

export default store;
