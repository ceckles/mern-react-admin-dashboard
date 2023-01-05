import bodyParser from "body-parser";
import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import helmet from "helmet";
import mongoose from "mongoose";
import morgan from "morgan";

import colors from "colors";
import clientRouter from "./routes/client.js";
import generalRouter from "./routes/general.js";
import managementRouter from "./routes/management.js";
import salesRouter from "./routes/sales.js";

/* CONFIG */
dotenv.config();
const app = express();
app.use(express.json());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use(morgan("common"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

/* COLORS */
// set theme
colors.setTheme({
  silly: "rainbow",
  input: "grey",
  verbose: "cyan",
  prompt: "grey",
  info: "green",
  data: "grey",
  help: "cyan",
  warn: "yellow",
  debug: "blue",
  error: "red",
});

/* ROUTES */
app.use("/client", clientRouter);
app.use("/general", generalRouter);
app.use("/management", managementRouter);
app.use("/sales", salesRouter);

/* MONGOOSE SETUP */
const PORT = process.env.PORT || 9000;
mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    app.listen(PORT, () => {
      console.log(colors.silly(`Server running on port: ${PORT}`));
    });
  })
  .catch((error) => {
    console.log(colors.error(error.message));
  });
