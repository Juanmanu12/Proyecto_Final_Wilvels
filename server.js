import "dotenv/config";
import express from "express";
import cors from "cors";
import productsRoutes from "./Routes/productsRoutes.js";
import userRoutes from "./Routes/users_routes.js";
import purchasesRoutes from "./Routes/purchases_routes.js";
import categoriesRoutes from "./Routes/cathegories_routes.js";
import authRoutes from "./Routes/auth_routes.js";

const app = express();
app.use(cors());
app.use(express.json());


app.use("", productsRoutes);
app.use("", userRoutes);
app.use("", purchasesRoutes);
app.use("", categoriesRoutes);
app.use("", authRoutes);

app.listen(3000, () => {
  console.log("Servidor corriendo en puerto 3000");
});