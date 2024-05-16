import express from "express";
import productControllers from "../Controllers/product_controllers.js";

const router = express.Router();

router.use(express.json());

app.get("/api/products", productControllers.list);
app.get("/api/products/:id", productControllers.find);
app.post("/api/products", productControllers.create);
app.patch("/api/products/:id", productControllers.update);
app.delete("/api/products/:id", productControllers.destroy);

