import WEATHER_ACTION_TYPES from "./ActionTypes";

const initialState = { current: null, weekly: null, tempUnit: "c" };

const WeatherReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case WEATHER_ACTION_TYPES.STORE_CURRENT:
      return { ...state, current: payload };
    case WEATHER_ACTION_TYPES.STORE_WEEKLY:
      return { ...state, weekly: payload };
    case WEATHER_ACTION_TYPES.STORE_TEMP_UNIT:
      return { ...state, tempUnit: payload };
    default:
      return state;
  }
};

export default WeatherReducer;
