const weatherController ={};
const Users = require('../models/user.model.js');
//////// store the weather by
weatherController.getWeatherByCityName = async(req,res)=>{

  console.log("Started getting weather by city name(weatherControllerjs)");
    try {
      const city= req._parsedUrl.query;
      const response = await fetch(`http://api.weatherapi.com/v1/current.json?key=${process.env.API_KEY}&q=${city}`);
      const data = await response.json();
      console.log("ended getting weather by city name, Successfully got data(weatherControllerjs)");
      return res.status(200).send({
        code: 200,
        message: 'Successful',
        data: data
      });
    } catch (error) {
      console.log("Error while getting weather by city name(weatherControllerjs)");
      console.log('error', error);
      return res.status(500).send(error);
    }
  }
  weatherController.updateUserCity = async (req, res) => {
    console.log("Updating city name in DB(weatherControllerjs)");
    if(!req.userData.data._id){
      console.log("Id is not avaiable(weatherControllerjs)")
      res.status(500).send({
          message: 'Somthing Wwent Wrong On Server Side',
      });
    }
      try {
        const _id = req.userData.data._id;
        const city = req._parsedUrl.query.toLowerCase();
        const result = await Users.findOne({ city: { $in: [city] } });
        if (result) {
          res.status(200).send({message: "successed", data: result});
        } else {
          await Users.updateOne(
            { _id: _id },
            { $push: { 'city': city } },
          { upsert: true, runValidators: true })
          .then(result =>
            console.log("Updated Weather Successfully in DB(weatherControllerjs)"), 
            res.status(200).send({message: "successed", data: result}
            ));
        }
      } catch (error) {
        console.log("Error while Updating Weather in DB(weatherControllerjs)")
        console.error('Error:', error);
        res.status(500).send({
          message: 'Somthing Went Wrong On Server Side',
      });
      }
  }
  weatherController.getUserCity = async (req, res) => {
    console.log("Getting city names from DB(weatherControllerjs)");
    const dataCities=[] ;
    const data=[];
    if(!req.userData.data._id){
      console.log("Id is not avaiable(weatherControllerjs)")
      res.status(500).send({
          message: 'Somthing went wrong on server side'
      });
    }
      try {
        const _id = req.userData.data._id;
        const result = await Users.findOne({_id: _id});
        const cities = result.city;
        for (const [index,value] of cities.entries()) {
          dataCities[index] = await fetch(`http://api.weatherapi.com/v1/current.json?key=${process.env.API_KEY}&q=${value}`);
          data[index] = await dataCities[index].json();
        }
        console.log("Received data from DB(weatherControllerjs)");
         await res.status(200).send({message: "Success",data: data});
      } catch (error) {
        console.log("Error while Getting Weather from DB(weatherControllerjs)")
        console.error('Error:', error);
        res.status(500).send({
          message: 'Somthing went wrong on server side'
      });
      }
  }
  weatherController.deleteUserCity = async (req, res) => {
    console.log("Deleting city names from DB(weatherControllerjs)");
    if(!req.userData.data._id){
      console.log("Id is not avaiable(weatherControllerjs)")
      res.status(500).send({
          message: 'Something went wrong on the server side'
      });
    }
      try {
        const _id = req.userData.data._id;
        const city = req._parsedUrl.query.toLowerCase();
        await Users.updateOne(
          { _id: _id },
          { $pull: { city: city } }
        ).then(result => 
          console.log("deleted city name from DB successfully(weatherControllerjs)"),
          res.status(200).send({message: "successfully deleted", data: result.city}
        ));
      } catch (error) {
        console.log("Error while deleting city name from DB(weatherControllerjs)")
        console.error('Error:', error);
        res.status(500).send({
          message: "Something went wrong on server side"
      });
      }
  }
  module.exports = weatherController;