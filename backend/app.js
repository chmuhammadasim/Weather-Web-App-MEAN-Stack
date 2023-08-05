require('dotenv').config();
const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const fs = require('fs');
const weatherRoute = require('./routes/weather.routes.js')
const userRoute = require('./routes/user.routes.js')
const errorHandler = require('./middleware/error-handler.js')
const errorMessage = require('./middleware/error-message.js')
const accessControl= require('./middleware/access-controls.js')
app.use(cors());
app.use(accessControl);
/////////parsing urlencode into json
app.use(
    bodyParser.urlencoded({
      extended: true
    })
  );
app.use(bodyParser.json());
/////mongoDB

try {
    mongoose.connect(process.env.WEATHER_DB_URL, 
    {
        useNewUrlParser: true,
        useUnifiedTopology:true,
    });
    console.log(`mongoDB connected successfully on ${process.env.WEATHER_DB}(app.js)`);
  } catch (error) {
    console.log("Error occured while connecting with mongoDB")
  }
  fs.readdirSync(__dirname + "/models").forEach(function(file) {
    require(__dirname+"/models/"+file);
});
/////default route
app.get('/',  function (req, res) {
    res.status(200).send({
      message: 'Express backend server'});
  });
////UsersRoutes
app.use(accessControl);
app.use("/weather",weatherRoute);
app.use("/users",userRoute);
////error handlers
app.use(errorHandler);
app.use(errorMessage);
/////port
try {
    server.listen(process.env.PORT_URL);
    console.log("connect with the port(app.js)");  
} catch (error) {
    console.log("Cannot connect with the port(app.js)");
    console.log(error);
}
