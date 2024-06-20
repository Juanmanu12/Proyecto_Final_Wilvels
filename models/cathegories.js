import mongoose from "../config/mongoose.config.js";

const categoriesModel = mongoose.Schema(
    {
        name: String, 
        description: String
        
    }
);

const Category = mongoose.model("Diseño Flores", categoriesModel);

export default Category;