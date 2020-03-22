const {Product} = require("../models/product.model")

module.exports.getAllProducts = (req,res) =>{
    Product.find({})
        .then(allProds => res.json(allProds))
        .catch(err => res.jso(err))
}

module.exports.createProduct = (req,res) =>{
    Product.create(req.body)
        .then(newProd => res.json(newProd))
        .catch(err => res.status(400).json(err))
}

module.exports.getOneProduct = (req, res) =>{
    const {id} = req.params;
    Product.findOne({_id:id})
        .then(oneProd => res.json(oneProd))
        .catch(err => res.json(err))
}

module.exports.updateProduct = (req,res) =>{
    const {id} = req.params;
    Product.findByIdAndUpdate(
            {_id:id}, //1. SEARCH QUERY
            req.body, //2. THE BODY TO BE UPDATED
            {new:true, runValidators:true} //3. SETTINGS
    )
        .then(updatedProd => res.json(updatedProd))
        .catch(err =>  res.status(400).json(err))
}

module.exports.deleteProduct = (req,res) =>{
    const {id} = req.params;
    Product.deleteOne({_id:id})
        .then(deleteRes => res.json(deleteRes))
        .catch(err => res.jsom(err))
}