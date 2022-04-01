import axios from "axios";

// Model
import CurrentWeather from "../Models/CurrentWeather.js";

/**
 * Get Current Weather data from OpenWeatherMap API & Store it in MongoDB
 *
 * @param {String} q is the query String having the City Name / Zip Code
 * @returns {Object} having Mongo Document ID
 */
export const getAndSaveCurrentWeather = async (q) => {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${q}&units=metric&appid=${process.env.OWM_API_KEY}`;

  try {
    const { data } = await axios.get(url);
    const savedDoc = await saveCurrentWeatherData(data.id, data);
    return { id: savedDoc.id };
  } catch (err) {
    const { data } = err.response;
    return data;
  }
};

/**
 * Storing Current Weather Data into MongoDB.
 *
 * @param {string} id Unique Identifier for the Document
 * @param {Object} currWeather Current Weather Data
 * @returns {Object} Updated/New Mongo Document
 */
const saveCurrentWeatherData = async (id, currWeather) => {
  /**
   * Using findOneAndUpdate width upsert set to true
   * So, if no document with id exist mongo will create a new Document
   * & if a document already exists then it will be updated with latest data
   */
  return await CurrentWeather.findOneAndUpdate({ id }, currWeather, { new: true, upsert: true });
};

/**
 * Retrieve Current Weather Info from Mongo
 *
 * @param {Object} filter Containing Unique Identifier to Find Document
 * @returns {Object} Mongo Document
 */
export const getWeatherMongo = async (filter) => {
  return await CurrentWeather.findOne(filter);
};
