const Item = require('../models/itemModel');

exports.createItem = async (req, res) => {
  const newItem = new Item({
    name: req.body.name,
    category: req.body.category,
    note: req.body.note,
    image: req.body.image
  });
  try{
    await newItem.save();
    res.status(201).json(newItem);
  }catch(error){
    res.status(400).json({message: error.message});
  }
}

exports.updateItem = async (req, res) => {
  try {
    const item = await Item.findByIdAndUpdate(req.params.id,
      {
        name: req.body.name,
        category: req.body.category,
        note: req.body.note,
        image: req.body.image
      }, {new: true});
      res.status(200).json(item);    
    
  } catch (error) {
    res.status(400).json({message: error.message});    
  }
}

exports.getItem = async(req,res) => {
  try {
    const item = await Item.findById(req.params.id);
    res.status(200).json(item);
  } catch (error) {
    res.status(404).json({message: error.message});
  }
}

exports.getAllItems = async (req, res) => {
  try {
    const items = await Item.find();
    res.status(200).json(items);
  } catch (error) {
    res.status(400).json({message: error.message});
  }
}

exports.deleteItem = async(req,res) => {
  try {
    const item = Item.findByIdAndDelete(req.params.id);
    res.status(204).json({message: 'message successfully deleted'});    
  } catch (error) {
    res.status(404).json(error.message);
  }
}
