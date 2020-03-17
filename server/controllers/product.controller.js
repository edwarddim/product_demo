const {Product} = require("../models/product.model")

module.exports.getAllProducts = (req,res) =>{
    Product.find({})
        .then(allProds => res.json(allProds))
        .catch(err => res.jso(err))
}

module.exports.createProduct = (req,res) =>{
    Product.create(req.body)
        .then(newProd => res.json(newProd))
        .catch(err => res.json(err))
}

module.exports.getOneProduct = (req, res) =>{
    const {id} = req.params;
    Product.findOne({_id:id})
        .then(oneProd => res.json(oneProd))
        .catch(err => res.json(err))
}

module.exports.updateProduct = (req,res) =>{
    const {id} = req.params;
    Product.findByIdAndUpdate({_id:id}, req.body, {new:true})
        .then(updatedProd => res.json(updatedProd))
        .catch(err => res.json(err))
}