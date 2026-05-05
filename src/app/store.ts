import { configureStore } from "@reduxjs/toolkit";
import pokedex from "../services/apiSlice";
import { setupListeners } from "@reduxjs/toolkit/query";

export const store = configureStore({
    reducer: {
        [pokedex.reducerPath]: pokedex.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(pokedex.middleware),
});

setupListeners(store.dispatch)