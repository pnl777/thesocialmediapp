import express from "express";
import dotenv from "dotenv";
import cors from "cors";

// Configurations
dotenv.config();

// Constants
const app = express();
const PORT = process.env.PORT;

// Middlewares
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cors());

app.listen(PORT, async () => {
  console.log(`Application is running on port: ${PORT}`);
});
