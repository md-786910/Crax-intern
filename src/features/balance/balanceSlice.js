import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  bal: [],
};

const balanceSlice = createSlice({
  name: "balance",
  initialState: initialState,
  reducers: {
    addBalance: (state, action) => {
      //   state.value += action.payload;

      state.bal.push(action.payload);
    },
  },
});

export const { addBalance } = balanceSlice.actions;
export default balanceSlice.reducer;
