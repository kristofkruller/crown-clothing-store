import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import thunk from "redux-thunk";

import persistReducer from "redux-persist/es/persistReducer";
import persistStore from "redux-persist/es/persistStore";
import storage from "redux-persist/lib/storage";


import { rootReducer } from "./root-reducer";

// root reducer

const middleWares = [
  process.env.NODE_ENV !== 'production' && logger,
  thunk,
].filter(Boolean);


// import { compose, applyMiddleware } from "redux";
// const enhancers = compose(applyMiddleware(...middleWares)); compose n applymiddleware no longer valid with configureStore

const persistConfig = {
  key: "root",
  storage: storage,
  whitelist: ["cart", "cookies"]
}
const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  preloadedState: {},
  middleware: middleWares
});

export const persistor = persistStore(store);