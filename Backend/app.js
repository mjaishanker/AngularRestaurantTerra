// Load all required modules
let app = require("express")();
let bodyParser = require("body-parser");
let mongoose = require("mongoose");
let cors = require("cors");

// Database URL Details
let url = "mongodb://localhost:27017/Restaurant";

// Middleware
// middleware enable data from post method
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

// Enable CORS policy (interfering betweern Angular and Node JS)
app.use(cors());

//database connection without warning
const mongooseDbOptions = {
    // to avoid warnings with mongobd
    useUnifiedTopology: true,
    useNewUrlParser: true,
};

// Database connection without warning
mongoose.connect(url, mongooseDbOptions) // ready to connect

// Connect the data
mongoose.connection;

// Link to router module
var Product = require("./router/product.router.js");

// Middleware
// If url goes to /product then link to the product.router.js
//http://localhost:9090/product/allProductDetails
//http://localhost:9090/product/retrieveProductById/100
//http://localhost:9090/product/storeProductDetails
//http://localhost:9090/product/deleteProductById/104
//http://localhost:9090/product/updateProductStock
app.use("/product", Product);

app.listen(9090, ()=>console.log("Server running on port number 9090"));
