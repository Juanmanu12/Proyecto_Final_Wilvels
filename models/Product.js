const productSchema = mongoose.schema(
    {
        id: String,
        name: String, 
        prize: Number,
        description: String,
        genre: String, 
        size: Number, 
        stock: Number,
        color: String,
        review: String
    
    }
);

const Product = mongoose.model("Product", productSchema);

export default Product;