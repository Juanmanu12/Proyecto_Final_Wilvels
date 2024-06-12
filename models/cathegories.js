import mongoose from "../config/mongoose.config.js";

const categoriesModel = mongoose.Schema(
    {
        name: String, 
        price: Number,
        products: [
            {
              type: mongoose.Types.ObjectId,
              ref: "Product"
          }
          ]
    }
);

const Category = mongoose.model("Diseño Flores", categoriesModel);

export default Category;