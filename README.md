[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-24ddc0f5d75046c5622901739e7c5dd533143b0c8e959d652212380cedb1ea36.svg)](https://classroom.github.com/a/VFFxQDoy)

<! -- The following texts are written using the help of AI, do not judge me my grammar is shit. -->

# WeatherTop
## Introduction
WeatherTop is a platform designed to help users define weather stations by their precise geographical coordinates (latitude and longitude) and create detailed weather readings for these stations. Whether you're a weather enthusiast, a researcher, or someone who needs accurate weather data, WeatherTop offers an intuitive and reliable way to track and record weather conditions.

## Key Features
- **Weather Station Management**: Easily define and manage multiple weather stations using their latitude and longitude coordinates.
- **Create detailed Readings**: Create and store detailed weather readings for your weather stations, including weather condition, temperature, wind speed and direction, as well as air pressure.
- **Automatic Readings**: Create your readings automatically with only one button through our integrated OpenWeatherMap API.
- **User-Friendly Interface**: Create your readings automatically with only one button through our integrated OpenWeatherMap API.
- **Data Accuracy**: Ensure high accuracy and reliability of your weather data with precise input fields and validation.

## Started
Note: This software requires a connection to the OTH-Regensburg VPN.
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
If you're a developer, the following section explains the project's code structure to you.

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
- **public**: The public folder contains all sources that are allowed to be seen by the client. This includes CSS, icons, and client-side JavaScript.
- **source**: The source folder contains all sources that are used by the server. It is implemented using the MVC (Model-View-Controller) design pattern.
    - **database**: The source folder contains all sources that are used by the server. It is implemented using the MVC (Model-View-Controller) design pattern.
    - **models**: The models folder contains modules to store and retrieve data. It is built using a procedural approach. Therefore, every file exports one function. This allows for very precise control over dependencies within the model.
    - **views**: The views folder contains Pug templates to build the website's frontend. It uses a components subfolder that contains Pug mixins for the website's components and several Pug templates to combine these components into the actual pages.
    - **controllers**: The controllers folder contains modules with functions to handle incoming API requests. These modules combine the model with the views.
    - **routes.js**: The routes.js module uses the controllers and defines all of the website's routes. This is put into its own module so that you can see all routes at once.
