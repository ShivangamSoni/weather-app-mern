import Express from "express";
import WeatherRouter from "./Routes/weather.js";
import path, { dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));

const app = Express();
app.use(Express.json());

/**
 * @listens /api/v1/weather
 * @description Route for all Weather API Endpoints
 */
app.use("/api/v1/weather/", WeatherRouter);

// Serve any static files
app.use(Express.static(path.join(__dirname, "../../frontend/build")));
// Handle React routing, return all requests to React app
app.get("*", function (req, res) {
  res.sendFile(path.join(__dirname, "../../frontend/build", "index.html"));
});

export default app;
