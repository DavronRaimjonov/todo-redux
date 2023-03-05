import { configureStore } from "@reduxjs/toolkit";
import todoSlice from "./todo-slice";
export const store = configureStore({
  reducer: {
    todoSlice,
  },
  devTools: process.env.NODE_ENV !== "production",
});
