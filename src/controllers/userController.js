const User = require("../models/userModel");
const bcrypt = require("bcrypt");
const jwtWebToken = require("jsonwebtoken");
const JWT_ENCRYPTION = require("../configs/jwtEncryptionKey");

exports.register = async (req, res) => {
  const newUser = new User({
    name: req.body.name,
    email: req.body.email,
    hash_password: bcrypt.hashSync(req.body.password, 15)
  })
  try {
    await newUser.save();
    res.status(201).json(newUser);
  } catch (error) {
    res.send(400).json({message: error.message});
  }
}

exports.login = async (req, res) => {
  User.findOne({
    email: req.body.email
  }).then((user) => {
    if(!user){
       res.status(404).json({message: 'user not found'});
    }else{
      if(!bcrypt.compareSync(req.body.password, user.hash_password)){
        res.status(400).json({message: 'wrong password or email'});
      }
      else {
        const token = jwtWebToken.sign({
          id: user._id,
          name: user.name,
          email: user.email
        }, JWT_ENCRYPTION.key);
        
         res.status(200).json({
          id: user._id,
          name: user.name,
          email: user.email,
          accessToken: token
         });
      }
    }
  })
  .catch((error) => {
     res.json({message: error.message});
  });
}

exports.login_required = async (req, res) => {
  console.log('Sign up')
}

exports.profile = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    res.status(200).json(user);
  } catch (error) {
    res.status(404).json({message: error.message});
  }
}