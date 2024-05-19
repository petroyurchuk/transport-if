import { configureStore } from "@reduxjs/toolkit";
import DirectionReducer from "@/store/direction/slice";

export const store = configureStore({
  reducer: {
    direction: DirectionReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
