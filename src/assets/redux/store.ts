import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import thunk from "redux-thunk";
import { Middleware } from "@reduxjs/toolkit";
import { persistReducer, persistStore, PersistConfig } from "redux-persist";
import storage from "redux-persist/lib/storage";

import { rootReducer } from "./root-reducer";

export type RootState = ReturnType<typeof rootReducer>;

// declare global {
//   interface Window {

//   }
// }

// root reducer

type ExtendedPersistConfig = PersistConfig<RootState> & {
  whitelist: (keyof RootState)[]
}

const persistConfig: ExtendedPersistConfig = {
  key: "root",
  storage: storage,
  whitelist: ["cart", "cookies"]
}
const persistedReducer = persistReducer(persistConfig, rootReducer);

const middleWares = [
  process.env.NODE_ENV !== 'production' && logger,
  thunk,
].filter((middleware): middleware is Middleware => Boolean(middleware));

export const store = configureStore({
  reducer: persistedReducer,
  preloadedState: {},
  middleware: middleWares
});

export const persistor = persistStore(store);