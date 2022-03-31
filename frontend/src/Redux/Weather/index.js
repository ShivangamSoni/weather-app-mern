const initialState = {};

const WeatherReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    default:
      return state;
  }
};

export default WeatherReducer;
