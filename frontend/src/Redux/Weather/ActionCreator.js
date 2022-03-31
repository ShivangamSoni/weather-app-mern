import axios from "axios";
import WEATHER_ACTION_TYPES from "./ActionTypes";

export const fetchCurrentWeather = (searchType, searchInput) => {
  const url = `/api/v1/weather/`;
  const params = { type: searchType, q: searchInput };

  return async (dispatch) => {
    try {
      const data = await axios.get(url, { params });
    } catch (error) {}
  };
};

export const fetchWeeklyWeather = () => {
  const url = `/api/v1/weather/weekly/`;
};
