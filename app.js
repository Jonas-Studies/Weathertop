import express from "express"
import dotenv from "dotenv"

/* Reading global variables from config file */
dotenv.config()
const PORT = process.env.PORT;

import mountRoutes from "./routes/routes.js";

const app = express()

//configure template engine
app.set("views", "views");
app.set("view engine", "pug");

mountRoutes(app)

app.use(express.static("./public"));

app.listen(PORT, function() {
  console.log(`Weathertop running and listening on port ${PORT}`)
});