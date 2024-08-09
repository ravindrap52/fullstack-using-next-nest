import { configureStore } from "@reduxjs/toolkit";
import dealerReducer from "@/features/dealers/dealerSlice";

export const store = configureStore({
  reducer: {
    dealers: dealerReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
