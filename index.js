import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import { config } from "./src/Config/Config.js";
import AuthRoute from "./src/Routes/AuthRoute.js";
import UserRoute from "./src/Routes/UserRoute.js";
import PostRoute from "./src/Routes/PostRoute.js";
import UploadRoute from "./src/Routes/UploadRoute.js";
import ChatRoute from "./src/Routes/ChatRoute.js";
import MessageRoute from "./src/Routes/MessageRoute.js";
import path from "path";
import { fileURLToPath } from "url";

const app = express();
app.use(cors());
//mongo connection
mongoose
  .connect(config.mongo.url, { retryWrites: true, w: "majority" })
  .then(() => {
    console.log("Mongo connected successfully.");
    app.listen(config.server.port, () => {
      console.log(`Server is running on port ${config.server.port}`);
    });
  })
  .catch((error) => console.error(error));

// middleware
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));

// routes
app.use("/auth", AuthRoute);
app.use("/user", UserRoute);
app.use("/post", PostRoute);
app.use("/upload", UploadRoute);
app.use("/chat", ChatRoute);
app.use("/message", MessageRoute);

// public images folder
const __filename = fileURLToPath(import.meta.url);

const __dirname = path.dirname(__filename);
console.log("__dirname", __dirname);
app.use(express.static(path.join(__dirname, "public")));
app.use("/images", express.static("images"));
