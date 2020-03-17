const mongoose = require("mongoose")

const ProductSchema = new mongoose.Schema({
    title:{
        type:String,
        required:[true, "Title must be required"],
        minlength:[3, "Product name must be longer than 3"]
    },
    price:{
        type:Number,
        required:[true, "Must have a number"]
    },
    description:{
        type:String,
        required:[true, "Must have a description"]
    }
}, {timestamps:true})

const Product = mongoose.model("Product", ProductSchema)
module.exports.Product = Product