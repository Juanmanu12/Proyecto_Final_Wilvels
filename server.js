import "dotenv/config";
import express from "express";
import productsRoutes from "./Routes/productsRoutes.js";
import userRoutes from "./Routes/users_routes.js";

const app = express();
app.use(express.json());

app.use("", productsRoutes);
app.use("", userRoutes);

app.listen(3000, () => {
  console.log("Servidor corriendo en puerto 3000");
});