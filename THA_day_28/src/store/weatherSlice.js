import { createSlice } from "@reduxjs/toolkit";

export const weatherSlice = createSlice({
  name: "weather",
  initialState: null,
  reducers: {
    setWeather: (state, action) => {
      return (state = action.payload);
    },
  },
});

export const getWeatherAsync = (city) => async (dispatch) => {
  let req = await fetch(
    `http://api.weatherapi.com/v1/current.json?key=fa57ec44ade4429e97292942210108&q=${city}&aqi=no`
  );
  let res = await req.json();
  dispatch(setWeather(res));
};

export const { setWeather } = weatherSlice.actions;
export default weatherSlice.reducer;
