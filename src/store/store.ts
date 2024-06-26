import { configureStore } from "@reduxjs/toolkit";
import { froggySlice } from "./froggySlice/froggySlice";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web
import { persistReducer, persistStore } from "redux-persist";

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, froggySlice.reducer);

export const store = configureStore({
  reducer: {
    [froggySlice.name]: persistedReducer,
  },
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
