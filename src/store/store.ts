import { configureStore } from "@reduxjs/toolkit";
import DirectionReducer from "@/store/direction/slice";
import SearchReducer from "@/store/search/slice";
import FilterReducer from "@/store/filter/slice";

export const store = configureStore({
  reducer: {
    direction: DirectionReducer,
    search: SearchReducer,
    filter: FilterReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
