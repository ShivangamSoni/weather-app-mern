import axios from "axios";
import { Router } from "express";

// Controllers
import { getAndSaveCurrentWeather, getWeatherMongo } from "../../Controller/CurrentWeather.js";
import { getAndSaveWeeklyWeather, getWeeklyWeatherMongo } from "../../Controller/WeeklyWeather.js";

const weatherRouter = Router();

/**
 * @method GET
 * @listens /api/v1/weather/current/
 * @description Retrieves Current Weather Info on the basis of User City Name/Zip Code
 */
weatherRouter.get("/current", async (req, res) => {
  const { q } = req.query;

  // If q isn't present then return
  if (!q) {
    res.status(401).json({ success: false, message: "Invalid Request" });
    return;
  }

  // Retrieve Weather From Mongo
  const currWeather = await getWeatherMongo({ name: new RegExp(q, "i") });

  // If Weather Data Not Available or Outdated by 1 Day Then get from OpenWeatherMap API & Save in DB
  if (!currWeather || (Date.now() / 1000 - currWeather?.dt) / (60 * 60 * 24) > 1) {
    try {
      const cur = await getAndSaveCurrentWeather(q);
      if (cur.cod && cur.cod === "404") {
        res.status(404).json({ success: false, message: `${q} Not Found` });
        return;
      }

      const curId = cur.id;

      // Retrieving Updated Current Data From DB
      const current = await getWeatherMongo({ id: curId });

      res.json({ success: true, data: current });
    } catch (err) {
      res.status(500).json({ success: false, message: "Server Error" });
    }
  } else {
    res.json({ success: true, data: currWeather });
  }
});

/**
 * @method GET
 * @listens /api/v1/weather/weekly/
 * @description Retrieves Weekly Weather Info on the Basis of Coordinates
 */
weatherRouter.get("/weekly", async (req, res) => {
  const { lon, lat } = req.query;

  // If lon or lat aren't present then return
  if (!lon || !lat) {
    res.status(401).json({ success: false, message: "Invalid Request" });
    return;
  }

  // Retrieve Weekly Weather From Mongo
  const weeklyWeather = await getWeeklyWeatherMongo({ lat, lon });

  // If Weather Data Not Available or Outdated by 1 Day Then get from OpenWeatherMap API & Save in DB
  if (!weeklyWeather || (Date.now() / 1000 - weeklyWeather?.dt) / (60 * 60 * 24) > 1) {
    try {
      const week = await getAndSaveWeeklyWeather({ lat, lon });
      if (week.cod && week.cod === "404") {
        res.status(404).json({ success: false, message: `${q} Not Found` });
        return;
      }

      const weekId = week.id;

      // Retrieving Updated Weekly Data From DB
      const weekly = await getWeeklyWeatherMongo({ id: weekId });

      res.json({ success: true, data: weekly });
    } catch (err) {
      res.status(500).json({ success: false, message: "Server Error" });
    }
  } else {
    res.json({ success: true, data: weeklyWeather });
  }
});

/**
 * @method GET
 * @listens /api/v1/weather/map/:type/:z/:x/:y
 * @description Retrieve Weather MAP Image for Layering on Top of Geographical Map.
 * :type is the type of Layer
 * :z is the Zoom Level
 * :x & :y are the Points on Map (Not Coordinates)
 */
weatherRouter.get("/map/:type/:z/:x/:y", async (req, res) => {
  const { type, z, x, y } = req.params;
  const url = `https://tile.openweathermap.org/map/${type}/${z}/${x}/${y}.png?&appid=${process.env.OWM_API_KEY}`;

  try {
    const data = await axios.get(url, { responseType: "stream" });
    res.header("Content-Type", "image/png");
    data.data.pipe(res);
  } catch (err) {
    res.json({ success: false, err });
  }
});

export default weatherRouter;
