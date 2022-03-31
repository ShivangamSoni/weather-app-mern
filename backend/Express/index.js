import Express from "express";
import WeatherRouter from "./Routes/weather.js";
import path from "path";

const app = Express();
app.use(Express.json());

app.use("/api/v1/weather/", WeatherRouter);

// If in production, then use static frontend build files.
if (process.env.NODE_ENV === "production") {
  // Serve any static files
  app.use(express.static(path.join(__dirname, "../frontend/build")));

  // Handle React routing, return all requests to React app
  app.get("*", function (req, res) {
    res.sendFile(path.join(__dirname, "../frontend/build", "index.html"));
  });
}

export default app;
