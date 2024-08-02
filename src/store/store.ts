import { configureStore } from "@reduxjs/toolkit";
import DirectionReducer from "@/store/direction/slice";
import SearchReducer from "@/store/search/slice";

export const store = configureStore({
  reducer: {
    direction: DirectionReducer,
    search: SearchReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
