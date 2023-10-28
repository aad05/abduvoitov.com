import { combineReducers, configureStore } from "@reduxjs/toolkit";
import dialogSlice from "./dialogSlice";
import { createWrapper } from "next-redux-wrapper";

const combinedReducer = combineReducers({
  dialog: dialogSlice,
});

const store = configureStore({
  reducer: {
    dialog: dialogSlice,
  },
  devTools: true,
});

const makeStore = () => configureStore({ reducer: combinedReducer });

export default store;
export type RootStore = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const wrapper = createWrapper(makeStore);
