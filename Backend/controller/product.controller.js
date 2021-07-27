let ProductModel = require("../model/product.model.js")

// Retrieve all product details
let getProductDetails =(req, res)=>{
    ProductModel.find({}, (err, result) => {
        if(!err){
            //console.log(result);
            res.json(result);
        }
    })
}

let getProductById = (req, res)=> {

    let pid = req.params.pid;
    ProductModel.find({_id:pid}, (err, result) => {
        if(!err){
            res.json(result);
        }
    })
}

let storeProductDetails = (req, res) => {
    let product = new ProductModel({
        _id: req.body.pid,
        pName: req.body.pName,
        stock: req.body.stock
    });
    
    product.save((err, result)=>{
        if(!err){
            res.send("Record stored successfully");
        }
        else{
            res.send("Record not stored successfully");
        }
    })
}

let deleteProductById = (req, res) => {
    let pid = req.params.pid;
    console.log("PID: ", pid);
    ProductModel.deleteOne({_id:pid},(err, result)=> {
        if(!err){
            if(result.deletedCount > 0){
                res.send("Record deleted successfully " + result);
            }
            else{
                res.send("Record not present");
            }
        }
        else{
            res.send("Error generated " + err);
        }
    })
}

let updateProductStock = (req, res) => {
    let pid = req.body.pid;
    let updatedStock = req.body.stock;

    ProductModel.updateMany(

        {_id:pid},
        {$set: {stock: updatedStock}},

        (err, result)=> {
        if(!err){
            if(result.nModified > 0){
                res.send("Record updated successfully ");
            }
            else{
                res.send("Interestingly Record not present");
            }
        }
        else{
            res.send("Error generated " + err);
        }
    })
}

module.exports = {getProductDetails, getProductById, storeProductDetails, deleteProductById, updateProductStock}