import mongoose from "../config/mongoose.config.js"

const productSchema = mongoose.Schema(
    {
        name: String, 
        price: Number,
        description: String,
        genre: String, 
        size: Number, 
        stock: Number,
        color: String,
        review: String,
    }
);

const Product = mongoose.model("Product", productSchema);

export default Product;