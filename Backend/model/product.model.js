let mongoose = require("mongoose");
mongoose.Promise = global.Promise;

let ProductSchema = mongoose.Schema({
    _id: Number,
    pName: String,
    stock: Number
});

let ProductModel = mongoose.model("", ProductSchema, "Product");

module.exports = ProductModel;