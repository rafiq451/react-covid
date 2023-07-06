import { configureStore } from '@reduxjs/toolkit';
import covidRedusers from '../Features/CovidSlice';
import indoReducers from '../Features/CovidSlice/indoSlice';
import gloReducers from '../Features/CovidSlice/gloSlice';
import proReducers from '../Features/CovidSlice/proSlice';

const store = configureStore({
  reducer: {
    covid: covidRedusers,
    indonesia: indoReducers,
    global: gloReducers,
    provinsi: proReducers,
  },
});

export default store;
