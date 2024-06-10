import express from "express"
import session from "express-session"
import bodyparser from "body-parser"
import dotenv from "dotenv"

/* Reading global variables from config file */
dotenv.config()
const PORT = process.env.PORT;

import mountRoutes from "./source/routes/routes.js";

const app = express()

app.use(session({secret: "Moin", resave: false, saveUninitialized: false}))

//configure template engine
app.set("views", "./source/views");
app.set("view engine", "pug");

app.use(bodyparser.json())

mountRoutes(app)

app.use(express.static("./public"));

app.listen(PORT, function() {
  console.log(`Weathertop running and listening on port ${PORT}`)
});
