import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { COUNTRY_KEY } from "../../constants";

export interface AppState {
  country: string;
}

const initialState: AppState = {
  country: "",
};

export const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    setCountry: (state, { payload }: PayloadAction<string>) => {
      localStorage.setItem(COUNTRY_KEY, payload === "Nigeria" ? "NG" : "GH");
      state.country = payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setCountry } = appSlice.actions;

export default appSlice.reducer;
