import { configureStore } from "@reduxjs/toolkit";
import dialogSlice from "./dialogSlice";

const store = configureStore({
  reducer: {
    dialog: dialogSlice,
  },
});

export default store;
export type RootStore = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
