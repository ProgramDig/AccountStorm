import express from "express";
import * as dotenv from "dotenv";
import { ProcessEnv } from "./interfaces/main.js";

dotenv.config();
const {PORT}: ProcessEnv = process.env;
const app = express();

const start = async () => {
  try {
    app.listen(PORT, () => console.log(`Server started on port - ${PORT}`));
  } catch (error) {
    console.log(`Server error: ${error}`);
    process.exit(1);
  }
};
start();