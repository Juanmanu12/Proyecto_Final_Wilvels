import Purchases from "../models/Purchases.js";

async function create(req, res) {
  try {
    const newPurchase = await Purchases.create({
     
      users: req.body.users,
      products: req.body.products,
      total: req.body.total,
      paymentMethod: req.body.paymentMethod
    });
    res.json(newPurchase);
  } 
  catch (err) {
    res.status(500).json("Error");
    console.log(err);
  }
}

async function list(req,res){
  try{
    const listPurchases = await Purchases.find();
    res.json(listPurchases);
  } 
  catch (err) {
    res.status(500).json("Error");
    console.log(err);
  }
}

async function find(req,res){
  try{
    const idPurchase = req.param.id;
    const purchase = await purchase.findById(idPurchase);
    res.status(200).json(purchase);
    }
  catch (err){
      res.status(500).json("Error del servidor")
  }
}

async function update(req,res){
  try{
    let purchaseCatch = await purchase.findById(req.param.id);
    purchaseCatch.idPurchase = req.body.idPurchase || purchaseCatch.idPurchase;
    purchaseCatch.users = req.body.users || purchaseCatch.users;
    purchaseCatch.products = req.body.products || purchaseCatch.products;
    purchaseCatch.total = req.body.total || purchaseCatch.total;

    await purchaseCatch.save();
    res.json(purchaseCatch);
  }

  catch (err) {
    res.status(500).json("Error del servidor");
    console.log(err)
}
}

async function erase(req,res){
  try{
    await Purchases.findByIdAndDelete(req.param.id);
    res.json("Orden Eliminada");

  }
  catch(err){  
    res.status(500).json("Error del servidor");
    console.log(err)
}
}

export default {
    create: create,
    list: list,
    search: find,
    update: update,
    erase: erase
  };