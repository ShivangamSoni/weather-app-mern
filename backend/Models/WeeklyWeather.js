import mongoose from "mongoose";

const WeeklyWeatherSchema = new mongoose.Schema({
  lat: { type: Number },
  lon: { type: Number },
  timezone: { type: String },
  timezone_offset: { type: Number },
  dt: { type: Number },
  daily: [
    {
      dt: { type: Number },
      sunrise: { type: Number },
      sunset: { type: Number },
      moonrise: { type: Number },
      moonset: { type: Number },
      moon_phase: { type: Number },
      temp: {
        day: { type: Number },
        min: { type: Number },
        max: { type: Number },
        night: { type: Number },
        eve: { type: Number },
        mor: { type: Number },
      },
      feels_like: {
        day: { type: Number },
        night: { type: Number },
        eve: { type: Number },
        mor: { type: Number },
      },
      pressure: { type: Number },
      humidity: { type: Number },
      dew_point: { type: Number },
      wind_speed: { type: Number },
      wind_deg: { type: Number },
      wind_gust: { type: Number },
      weather: [
        {
          id: { type: Number },
          main: { type: String },
          description: { type: String },
          icon: { type: String },
        },
      ],
      coluds: { type: Number },
      pop: { type: Number },
      uvi: { type: Number },
    },
  ],
});

export default mongoose.model("WeeklyWeather", WeeklyWeatherSchema);
