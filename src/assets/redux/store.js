import { configureStore } from "@reduxjs/toolkit";
import { compose, applyMiddleware } from "redux";
import { createLogger } from "redux-logger";
import thunk from "redux-thunk";

import { rootReducer } from "./root-reducer";

// root reducer
const Logger = createLogger({
  level: "info"
})
const middleWares = [Logger, thunk]

const enhancers = compose(
  applyMiddleware(...middleWares),
)

export const store = configureStore({
  reducer: rootReducer,
  preloadedState: undefined,
  enhancers: enhancers
});