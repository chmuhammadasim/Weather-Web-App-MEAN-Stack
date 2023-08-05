const Users = require('../models/user.model.js');
const bcrypt = require('bcryptjs');
const jsonwebtoken =  require('jsonwebtoken');
const usersController = {};
const cloudinary = require('cloudinary').v2;
          
//////Signup in function 
usersController.SignUpUser = async (req, res) => {
    try {
      console.log("starting signup(user.controller.js)");
      const body = req.body;
      const password = body.password;
      var salt = bcrypt.genSaltSync(10);
      var hash = bcrypt.hashSync(password, salt);
      body.password = hash;

      const user = new Users(body);
      await user.save();
      console.log("starting ended(user.controller.js)");
      res.status(201).send({
        message: 'Signup was Successful'
      });
    } catch (error) {
        console.log("Error occured while signing up(user.controller.js)");
        console.log('Error:', error);
        if(error.code===11000){
            res.send({
            message: 'This email has been registered already',
            }).status(500);
        }else {
          res.send({
              message: 'Error',
              detail: error
              }).status(500);
        }
    }
  };
  //////Login in function 
  usersController.LogInUser = async (req, res) => {
    console.log("Starting Login(user.controller.js)");
    try {
        const body = req.body;
        const email = body.email;
        const result = await Users.findOne({ email: email });
        if (!result) {
            console.log("User doesnot exist(user.controller.js)");
            res.status(404).send({
                Error: 'This user doesnot exists. Please signup first'
            });
        } else {
          if ( bcrypt.compareSync(body.password, result.password)) {
            result.password = undefined;
            const token = jsonwebtoken.sign({
               data: result,
               role: 'User'
            },process.env.JWT_KEY, { expiresIn: '1d' });   
            console.log("Logging in ended,Successfully Logged in (user.controller.js)");
            res.send({ message: 'Successfully Logged in', token: token,expiresIn: 86400000 });
          } else {
            console.log('password doesnot match(user.controller.js)');
            res.status(404).send({ message: 'Wrong email or Password' });
          }
        }
      } catch (error) {
        console.log("Error occured while logining in(user.controller.js)")
        console.log('Error', error);
      }
};

////////get only one user from db

usersController.getSingleUser = async (req, res) => {
    let user;
    try {
      user = req.userData;
      // const _id = req.userData._id;
      // user = await Users.findOne({ _id: _id });
      res.status(200).send({
        code: 200,
        message: 'Successful',
        data: user
      });
    } catch (error) {
      console.log('error', error);
      return res.status(500).send(error);
    }
  };
  ////////delete only one user from db
  usersController.deleteUser = async (req, res) => {
    if (!req.params._id) {
        console.log("Id is not in parameter body")
        res.status(500).send({
            message: 'ID missing'
        });
    }
    try {
      const _id = req.params._id;
      await Users.findOneAndDelete({
        _id: _id
      });
      res.status(200).send({
        code: 200,
        message: 'Deleted Successfully'
      });
    } catch (error) {
      console.log('error', error);
      return res.status(500).send(error);
    }
  };
////////update one user from db
usersController.updateUser = async (req, res) => {
    if (!req.params._id) {
        console.log("Id is not avaiable in params")
        res.status(500).send({
            message: 'ID missing'
        });
    }
    try {
        const _id = req.params._id;
        let updates = req.body;
        runUpdate(_id, updates, res);
    } catch (error) {
        console.log("Error while updating user");
        console.log('error', error);
        return res.status(500).send(error);
    }
  };
  async function runUpdate(_id, updates, res) {
    try {
      const result = await Users.updateOne(
        { _id: _id },
        { $set: updates },
        { upsert: true, runValidators: true });

        if (result.nModified == 1) {
          res.status(200).send({
            code: 200,
            message: 'Updated Successfully'
          });
        } else if (result.upserted) {
          res.status(200).send({
            code: 200,
            message: 'Created Successfully'
          });
        } else {
          res.status(422).send({
            code: 422,
            message: 'Unprocessible Entity'
          });
        }
    } catch (error) {
        console.log('error', error);
        return res.status(500).send(error);
    }
  }
  module.exports = usersController;