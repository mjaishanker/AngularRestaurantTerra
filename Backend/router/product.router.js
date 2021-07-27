let express = require("express");

// This File is responsiible to navigate to the controller 
// based on the path
let router = express.Router();  // Router reference

let ProductController = require("../controller/product.controller.js")

// Mapping sub path with http method
router.get("/allProductDetails", ProductController.getProductDetails);
router.get("/retrieveProductById/:pid", ProductController.getProductById);
router.post("/storeProductDetails", ProductController.storeProductDetails);
router.delete("/deleteProductById/:pid", ProductController.deleteProductById);
router.put("/updateProductStock", ProductController.updateProductStock);

module.exports = router;