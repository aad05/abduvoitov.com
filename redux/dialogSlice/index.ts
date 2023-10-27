import { createSlice } from "@reduxjs/toolkit";

type InitialStateType = {
  siteMap: boolean;
};

const initialState: InitialStateType = {
  siteMap: false,
};

const dialogSlice = createSlice({
  name: "dialogSlice",
  initialState,
  reducers: {
    setSiteMap(state) {
      state.siteMap = !state.siteMap;
    },
  },
});

export const { setSiteMap } = dialogSlice.actions;
export default dialogSlice.reducer;
