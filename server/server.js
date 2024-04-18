import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import {dbConnect} from "./config/db.js";
import userRoute from "./routes/user.routes.js";

// Configurations
dotenv.config();

// Constants
const app = express();
const PORT = process.env.PORT;

// Middlewares
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cors());

// User Route
app.use("/api", userRoute);

// Generic Error Route
app.use((err, req, res, next) => {
  const {message, statusCode} = err;
  res.status(statusCode || 500).json({
    success: false,
    message,
  });
});

// Route not found
app.all("*", (_, res) => {
  res.status(401).json({
    success: false,
    message: "This route is unavailable.",
  });
});

app.listen(PORT, async () => {
  await dbConnect();
  console.log(`Application is running on port: ${PORT}`);
});
