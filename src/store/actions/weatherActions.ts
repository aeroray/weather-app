import { ThunkAction } from "redux-thunk";
import { RootState } from "..";
import {
  WeatherAction,
  WeatherError,
  WeatherData,
  GET_WEATHER,
  SET_ERROR,
  SET_LOADING,
} from "../types";

export const getWeather = (
  city: string
): ThunkAction<void, RootState, null, WeatherAction> => {
  return async (dispatch) => {
    try {
      const API_KEY = "d3b6f780cc824038d39829f0f6a0d091";
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`
      );

      if (!response.ok) {
        const resData: WeatherError = await response.json();
        throw new Error(resData.message);
      }

      const resData: WeatherData = await response.json();
      dispatch({
        type: GET_WEATHER,
        payload: resData,
      });
    } catch (error) {
      dispatch({
        type: SET_ERROR,
        payload: error.message,
      });
    }
  };
};

export const setLoading = (): WeatherAction => {
  return {
    type: SET_LOADING,
  };
};

export const setError = (): WeatherAction => {
  return {
    type: SET_ERROR,
    payload: "",
  };
};
