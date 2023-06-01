import { compose, createStore, applyMiddleware } from "redux";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";

import { rootReducer } from "./root-reducer";
import { loggerMiddleWare } from "./middleWare/looger";

const persistConfig = {
  key: "root",
  storage,
  blackList: ["user"],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const middleWares = [
  process.env.NODE_ENV !== "production" && loggerMiddleWare,
].filter(Boolean);

const composeEnhancre =
  (process.env.NODE_ENV !== "production" &&
    window &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

const composeEnhancres = composeEnhancre(applyMiddleware(...middleWares));

export const Store = createStore(persistedReducer, undefined, composeEnhancres);
export const persistor = persistStore(Store);
