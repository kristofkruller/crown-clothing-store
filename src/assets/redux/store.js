import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import thunk from "redux-thunk";

import { rootReducer } from "./root-reducer";

// root reducer
const middleWares = [logger, thunk];

// import { compose, applyMiddleware } from "redux";
// const enhancers = compose(applyMiddleware(...middleWares)); compose n applymiddleware no longer valid with configureStore

export const store = configureStore({
  reducer: rootReducer,
  preloadedState: {},
  middleware: middleWares,
});