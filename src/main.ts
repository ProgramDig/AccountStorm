import express from "express";
import cors from "cors";
import * as dotenv from "dotenv";
import mongoose from "mongoose";

import authRouter from "./router/auth.router.js";
import roleRouter from "./router/role.router.js";

import { ProcessEnv } from "./interfaces/main.js";


dotenv.config();
const {PORT, DB_CONNECTION}: ProcessEnv = process.env;
const app = express();

app.use(cors());
app.use(express.json());
app.use("/api/auth", authRouter);
app.use("/api/role", roleRouter);

const start = async () => {
  try {
    mongoose.set("strictQuery", false);
    DB_CONNECTION != null && await mongoose.connect(DB_CONNECTION);
    app.listen(PORT, () => console.log(`Server started on port - ${PORT}`));
  } catch (error) {
    console.log(`Server error: ${error}`);
    process.exit(1);
  }
};
start();