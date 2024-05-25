const express = require("express");
const dotenv = require("dotenv");

/* Reading global variables from config file */
dotenv.config();
const PORT = process.env.PORT;

var path = require("path")

/*
 *
 * Express setup
 *
*/

app = express();

app.use('/bootstrap/css', express.static(__dirname + '/node_modules/bootstrap/dist/css'))
//turn on serving static files (required for delivering css to client)
app.use(express.static("public"));
//configure template engine
app.set("views", "views");
app.set("view engine", "pug");

app.get('/', (request, response) => {
	response.render("index");
});

app.get('/dashboard', (request, response) => {
	response.render("dashboard");
});

app.get('/station', (request, response) => {
	response.render("station");
});

app.listen(PORT, function() {
  console.log(`Weathertop running and listening on port ${PORT}`);
});
