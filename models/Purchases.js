import mongoose from "../config/mongoose.config.js";

const purchasesSchema = mongoose.Schema({
    
    user: {
      type: mongoose.Types.ObjectId,
      ref: "User"
    },
    products: [
      {
        type: mongoose.Types.ObjectId,
        ref: "Product"
    }
    ],
    total: Number,
    PaymentMethods: {
        name: String,
        id: Number,
      },

});

const Purchases = mongoose.model("Purchases", purchasesSchema);

export default Purchases;