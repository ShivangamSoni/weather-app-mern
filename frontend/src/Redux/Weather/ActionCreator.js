import axios from "axios";
import WEATHER_ACTION_TYPES from "./ActionTypes";
import { showNotification, hideNotification } from "../Site/ActionCreator";

export const fetchWeather = (searchInput) => {
  const url = `/api/v1/weather/current/`;
  const params = { q: searchInput };

  return async (dispatch) => {
    try {
      const {
        data: { data },
      } = await axios.get(url, { params });
      dispatch({ type: WEATHER_ACTION_TYPES.STORE_CURRENT, payload: data });
      dispatch(fetchWeeklyWeather(data.coord));
    } catch (error) {
      dispatch(showNotification(error.response.data.message));

      setTimeout(() => {
        dispatch(hideNotification());
      }, 3000);
    }
  };
};

export const fetchWeeklyWeather = (params) => {
  const url = `/api/v1/weather/weekly`;

  return async (dispatch) => {
    try {
      const {
        data: { data },
      } = await axios.get(url, { params });
      dispatch({ type: WEATHER_ACTION_TYPES.STORE_WEEKLY, payload: data });
    } catch (error) {
      dispatch(showNotification(error.response.data.message));

      setTimeout(() => {
        dispatch(hideNotification());
      }, 3000);
    }
  };
};

export const changeTempUnit = (unit) => ({ type: WEATHER_ACTION_TYPES.STORE_TEMP_UNIT, payload: unit });
