import { createSlice } from '@reduxjs/toolkit';
// import ENPOINTS from '../../../utils/constants/enpoints';
const provinsiSlice = createSlice({
  name: 'provinsi', // Nama slice
  initialState: {
    provinsi: [],
  },
  reducers: {
    updateProvinsi(state, action) {
      state.provinsi = action.payload;
    },
  },
});

const { updateProvinsi } = provinsiSlice.actions;
const proReducers = provinsiSlice.reducer;

export default proReducers;
export { updateProvinsi };
