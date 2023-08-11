# Weathery - Weather Forecast Web Application

Welcome to Weathery! This is a web application that provides users with real-time weather forecasts and weather-related information. Weathery is built using the MEAN stack, where MongoDB serves as the database, Tailwind CSS for styling, Angular for frontend development, and Node.js for backend functionality.

[image](https://github.com/chmuhammadasim/Weather-Web-App-MEAN-Stack/assets/89093185/056a1918-7804-44df-ae47-8ba68085bec0)

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contact](#contact)

## Introduction

Weathery is a user-friendly weather application that allows users to get accurate and up-to-date weather information for any location. The app combines the power of Angular's frontend framework with the flexibility of Node.js as the backend to deliver a seamless user experience. MongoDB is used as the database to store user preferences and provide personalized weather data.

## Features

- **Real-time Weather Data**: Get the latest weather updates for any city or location.
- **Weather Forecast**: View detailed weather forecasts for multiple days ahead.
- **User Authentication**: Allow users to create accounts and log in to access personalized features.
- **Favorite Locations**: Enable users to save and manage their favorite locations for quick access.
- **Interactive UI**: A user-friendly interface with smooth navigation and interactive elements.

## Prerequisites

Before you proceed with the installation, make sure you have the following components installed on your system:

- Node.js (v12 or higher)
- npm (Node Package Manager)
- Angular CLI
- MongoDB

## Installation

  Clone the Weathery repository from GitHub:

```bash
gh repo clone chmuhammadasim/Weather-Web-App-MEAN-Stack
```

  Install the required dependencies for both the frontend and backend:

```bash
cd frontend
npm install

cd ../backend
npm install
```

  Configure MongoDB connection and Ports:

   - Create and .env file in backend
   - Add enviroment IP in frontend/src/enviroments (environment.development.ts , environment.ts)
   - Update the MongoDB connection URI as per your configuration.

  Build and serve the Angular frontend:

```bash
cd frontend
ng build --prod
ng serve
```

  Start the backend server:

```bash
cd ../backend
npm start app.js
```
  or 
```bash
cd ../backend
npx nodemon app.js
```
  if you have Installed Nodemon

  Open your web browser and visit `http://localhost:4200` to access Weathery.

## Usage

- **Home**: The landing page where users can search for weather information by city or location.
- **Sign Up / Log In**: Users can create an account or log in to access personalized features.
- **Weather Details**: Get detailed weather information, including temperature, humidity, wind speed, and more.
- **Favorite Locations**: Save and manage your favorite locations for quick access.



## License

Weathery is released under the [MIT License](LICENSE).

## Contact

If you have any questions or feedback, feel free to reach out to our team at [muhammadasimchattha@gmail.com](mailto:muhammadasimchattha@gmail.com)

##Thank you for choosing Weathery! We hope you enjoy using our weather forecast application.
