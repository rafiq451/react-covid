import { createSlice } from '@reduxjs/toolkit';
// import ENPOINTS from '../../../utils/constants/enpoints';
const indonesiaSlice = createSlice({
  name: 'indonesia', // Nama slice
  initialState: {
    indonesia: [],
  },
  reducers: {
    updateIndonesia(state, action) {
      state.indonesia = action.payload;
    },
  },
});

const { updateIndonesia } = indonesiaSlice.actions;
const indoReducers = indonesiaSlice.reducer;

export default indoReducers;
export { updateIndonesia };
