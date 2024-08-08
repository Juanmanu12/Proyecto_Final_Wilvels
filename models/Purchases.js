import mongoose from "../config/mongoose.config.js";

const purchasesSchema = mongoose.Schema({
    
    user: {
      type: mongoose.Types.ObjectId,
      ref: "User"
    },
    products: [
       { 
        productDetail: {
        type: mongoose.Types.ObjectId,
        ref: "Product"
      },
      quantity: Number
    }
    ],
    total: Number,
    PaymentMethods: {
        name: String,
        id: Number,
      },
      name: String,
      lastname: String,
      address: String,
      apto: String,
      city: String,
      department: String,

});

const Purchases = mongoose.model("Purchases", purchasesSchema);

export default Purchases;