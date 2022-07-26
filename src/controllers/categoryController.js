const Category = require("../models/category.model")

exports.createCategory = async (req, res) => {
    const newCategory = new Category({
        name: req.body.name,
    });
    
    try {
        await newCategory.save()
        res.status(201).json(newCategory);
    }catch(error) {
        res.status(400).json({message: error.message});
    };
}

exports.getAllCategories = async (req, res) => {
    try {
        const categories = await Category.find();
        res.status(200).json(categories);
    } catch (error) {
        res.status(400).json({message: error.message});
    }
};

exports.getCategory = async (req, res) => {
    try {
        const category = await Category.findById(req.params.id);
        res.status(200).json(category);
    } catch (error) {
        res.status(404).json({message: error.message});        
    }
}
