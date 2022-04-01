import app from "./Express/index.js";
import dotenv from "dotenv";
import mongoose from "mongoose";

dotenv.config();

// Connect to Mongo
const MONGO_URI = process.env.MONGO_URI;
mongoose
  .connect(MONGO_URI)
  .then(() => console.log("DB Connection Successful"))
  .catch((error) => console.log("DB Error:\n\t" + error));

// Listening to Requests
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server Started at Port: ${PORT}`);
});
