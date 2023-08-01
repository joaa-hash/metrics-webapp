import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import fetchWeather from './fetchWeather';

const getWeatherAsync = createAsyncThunk('weather/fetchWeather', fetchWeather);

const initialState = {
  mexico: {
    states: [
      {
        state: 'VILLAHERMOSA',
        latitude: 17,
        longitude: 92,
        data: null,
      },
      {
        state: 'CANCUN',
        latitude: 21,
        longitude: -86,
        data: null,
      },
      {
        state: 'MEXICO CITY',
        latitude: 19,
        longitude: -99,
        data: null,
      },
      {
        state: 'MONTERREY',
        latitude: 25,
        longitude: -100,
        data: null,
      },
      {
        state: 'GUADALAJARA',
        latitude: 20,
        longitude: -103,
        data: null,
      },
      {
        state: 'ACAPULCO',
        latitude: 16,
        longitude: -99,
        data: null,
      },
    ],
  },
};
const weatherSlice = createSlice({
  name: 'weather',
  initialState,
  reducers: {
    getHome: (state, action) => {
      console.log(state, action);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getWeatherAsync.fulfilled, (state, action) => {
      console.log('action--->', action);
      //state.countries.mexico.states.villahermosa.data = action.payload;
    });
  },
});

export { getWeatherAsync, weatherSlice };
export const { getHome } = weatherSlice.actions;
export default weatherSlice.reducer;
