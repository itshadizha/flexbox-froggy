import { configureStore } from "@reduxjs/toolkit";
import { froggySlice } from "./froggySlice/froggySlice";

export const store = configureStore({
    reducer: {
     [froggySlice.name]: froggySlice.reducer   
    }
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch