const jwt = require("jsonwebtoken");
const ShoppingList = require("../models/shoppingListModel");
const jwtConfig = require("../configs/jwtEncryptionKey");


exports.createShoppingList = async (req, res) => {
  let user = jwt.decode(req.headers["authorization"], jwtConfig.key);
  const shoppingLists = await ShoppingList.find({belongTo: user.id});
  let test = shoppingLists.some((item) => item.status === 'Active');
  if (test){
    res.status(400).json({message: "user has active list can't create more list"});
  }else{
    const newShoppingList = new ShoppingList({
      name: req.body.name,
      items: req.body.items,
      belongTo: user.id,
    });
    try {
      await newShoppingList.save();
      res.status(201).json(newShoppingList);    
    } catch (error) {
      res.status(400).json({message: error.message});    
    }
  }
}

exports.getAllShoppingList = async (req, res) => {
  try {
    let user = jwt.decode(req.headers["authorization"], jwtConfig.key);
    const shoppingLists = await ShoppingList.find({belongTo: user.id});
    res.status(200).json(shoppingLists);    
  } catch (error) {
    res.status(400).json({message: error.message});
  }
}

exports.getShoppingList = async (req, res) => {
  try {
    if(belongsToUser(req.params.id, req.headers["authorization"])) {
      const shoppingList = await ShoppingList.findById(req.params.id);
      res.status(200).json(shoppingList);
    }else{
    res.status(400).json({message: "this not your shopping list"});
    }
  } catch (error) {
    res.status(404).json({message: error.message});
  }
}

exports.updateShoppingList = async (req, res) => {
  try {
    const shoppingList = await ShoppingList.findByIdAndUpdate(req.params.id,
      {
        name: req.body.name,
        items: req.body.items,
      }, {new: true});
      res.status(200).json(shoppingList);    
    
  } catch (error) {
    res.status(400).json({message: error.message});    
  }
}

exports.updateStatusShoppingList = async (req, res) => {
  try {
    const shoppingList = await ShoppingList.findByIdAndUpdate(req.params.id,
      {
        status: req.body.status,
      }, {new: true});
      res.status(200).json(shoppingList);    
    
  } catch (error) {
    res.status(400).json({message: error.message});    
  }
}

exports.deleteShoppingList = async (req, res) => {
  try {
    const shoppingList = Item.findByIdAndDelete(req.params.id);
    res.status(204).json({message: 'Shopping list successfully deleted'});    
  } catch (error) {
    res.status(404).json(error.message);
  }
}

const belongsToUser = async (id, token) => {
  try {
    const shoppingList = await ShoppingList.findById(id);
    const user = jwt.decode(token, jwtConfig.key);
    if(shoppingList.belongTo === user.id){
      return true;
    }else {
      return false;
    }    
  } catch (error) {
    console.log(error);
  }
}
