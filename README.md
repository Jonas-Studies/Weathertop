[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-24ddc0f5d75046c5622901739e7c5dd533143b0c8e959d652212380cedb1ea36.svg)](https://classroom.github.com/a/VFFxQDoy)
# WeatherTop
## Introduction
WeatherTop is a platform designed to help users define weather stations by their precise geographical coordinates (latitude and longitude) and create detailed weather readings for these stations. Whether you're a weather enthusiast, a researcher, or someone who needs accurate weather data, WeatherTop offers an intuitive and reliable way to track and record weather conditions.

## Key Features
- **Weather Station Management**: Easily define and manage multiple weather stations using their latitude and longitude coordinates.
- **Create detailed Readings**: Create and store detailed weahter readings for your weatherstations including the weather condition, temperature, Windspeed and direction as well as airpressure.
- **Automatic Readings**: Create your readings automatically with only one button through our integrated openweathermap API.
- **User-Friendly Interface**: Simple and intuitive user interface for seamless interaction.
- **Data Accuracy**: Ensure high accuracy and reliability of your weather data with precise input fields and validation.

## Started
Note: This software requires to be connected to the OTH-Regensburg VPN.
To get started with WeatherTop, follow these steps:
1. **Clone the Repository**: 
    ```sh
    git clone https://github.com/OTHRegensburgMedieninformatik/studienleistung-mi-weathertop-medieninformatik-sose-24-Jonas-Studies
    ```
2. **Install Dependencies inside project folder**: 
    ```sh
    npm install
    ```
3. **Run the Application**: 
    ```sh
    node ./app.js
    ```

## For Developers
If youre a developer the following section is to explain the projects code structure to you.

``` File structure
WeatherTop
├── public
│ ├── css
│ ├── icons
│ └── js
└── source
  ├── database
  ├── models
  ├── views
  ├── controllers
  └── routes.js
```

### Explanation
- **public**: The puplic folder contains all sources that are allowed to be seen by the client. This includes css, icons and clientside js.
- **source**: The source folder contains all sources that are getting used by the server. It is implemented using the mvc (Model-View-Controller) desing pattern.
    - **database**: The database folder contains modules to interact with the database.
    - **models**: The models folder contains modules to store and recieve data. It is build using a procedural aproach. Therefore every file exports one function. This allows for very precise control over dependencies within the model.
    - **views**: The views folder contains pug templates to build up the websites frontend. It uses a components subfolder that contains pug mixins for the websites componenets and several pug templates to combine these components to the actual pages.
    - **controllers**: The controllers folder contains modules with functions to handle incoming api requests. These modules combine the model with the views.
    - **routes.js**: The routes.js module uses the controllers and defines all of the websites routes. This is put into its own module so that you can see all routes at once.
