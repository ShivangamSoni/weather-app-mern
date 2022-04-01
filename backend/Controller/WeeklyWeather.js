import axios from "axios";

// Model
import WeeklyWeather from "../Models/WeeklyWeather.js";

/**
 * Get Weekly Weather data from OpenWeatherMap API & Store it in MongoDB
 *
 * @param {Object} coord contains Coordinates of Location. OpenWeatherMap Weekly Weather API needs Coordinates, it doesn't work with City Name or Zip Code.
 * @returns {Object} Mongo Document ID
 */
export const getAndSaveWeeklyWeather = async (coord) => {
  const { lat, lon } = coord;
  const url = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=minutely,hourly,alerts&units=metric&appid=${process.env.OWM_API_KEY}`;

  try {
    const { data } = await axios.get(url);

    // Returned data contains additional info so, keeping just the needed Data
    const { current, ...restData } = data;
    restData.dt = current.dt;
    const savedDoc = await saveWeeklyWeatherData({ lon: data.lon, lat: data.lat }, restData);
    return { id: savedDoc.id };
  } catch (err) {
    const { data } = err.response;
    return data;
  }
};

/**
 * Storing Weekly Weather Data into MongoDB.
 *
 * @param {Object} coord Contains Coordinates of Location used to Uniquely Identify Document
 * @param {Object} weekWeather Weekly Weather Data
 * @returns {Object} Updated/New Mongo Document
 */
const saveWeeklyWeatherData = async (coord, weekWeather) => {
  /**
   * Using findOneAndUpdate width upsert set to true
   * So, if no document with coordinates exist mongo will create a new Document
   * & if a document already exists then it will be updated with latest data
   */
  return await WeeklyWeather.findOneAndUpdate(coord, weekWeather, { new: true, upsert: true });
};

/**
 * Retrieve Weekly Weather Info from Mongo
 *
 * @param {String} filter Containing Unique Identifier to Find Document
 * @returns {Object} Mongo Document
 */
export const getWeeklyWeatherMongo = async (filter) => {
  return await WeeklyWeather.findOne(filter);
};
