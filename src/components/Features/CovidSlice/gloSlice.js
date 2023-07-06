import { createSlice } from '@reduxjs/toolkit';

const globalSlice = createSlice({
  name: 'global',
  initialState: {
    global: [],
  },
  reducers: {
    updateGlobal(state, action) {
      state.global = action.payload;
    },
  },
});

const { updateGlobal } = globalSlice.actions;
const gloReducers = globalSlice.reducer;

export default gloReducers;
export { updateGlobal };
