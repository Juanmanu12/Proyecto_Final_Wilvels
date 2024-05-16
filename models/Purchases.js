import mongoose from "../config/mongoose.config.js";

const PurchasesSchema = mongoose.Schema({
    id: Number,
    userid: String,
    productsid: String,
    total: Number,
    Paymentmethods: {
        type: String,
      },

});

const Purchases = mongoose.model("Purchases", usersSchema);

export default Purchases;