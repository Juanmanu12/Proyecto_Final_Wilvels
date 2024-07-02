import mongoose from "../config/mongoose.config.js"


const productSchema = mongoose.Schema(
    {
        name: String,
        description: String,
        
        size: [
            {
                code: String, 
                price: Number,
            }
        ],
        scent: {
            type: [String],
            default: ["Aroma 1", "Aroma 2", "Aroma 3"]
        },

        color: {
            type: [String],
            default: ["Color 1", "Color 2", "Color 3"]
        },
        stock: {
            type: [String],
            default: ["Stock 1", "Stock 2", "Stock 3"]
        },
        image: String,

    }
);

const Product = mongoose.model("Product", productSchema);

export default Product;