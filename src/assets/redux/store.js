import { configureStore } from "@reduxjs/toolkit";
import { compose, applyMiddleware } from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";

import { rootReducer } from "./root-reducer";

// root reducer
const middleWares = [logger, thunk];

const enhancers = compose(applyMiddleware(...middleWares));

export const store = configureStore({
  reducer: rootReducer,
  preloadedState: {},
  middleware: middleWares,
});