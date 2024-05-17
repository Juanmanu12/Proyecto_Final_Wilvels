import express from "express";
import purchasesController from "../Controllers/purchases_controllers.js";

const  purchasesRoutes = express.Router();

purchasesRoutes.post("/purchases/", purchasesController.create);
purchasesRoutes.get("/purchases/",purchasesController.list);
purchasesRoutes.get("/purchases/:id",purchasesController.search);
purchasesRoutes.patch("/purchases/:id",purchasesController.update);
purchasesRoutes.delete("/purchases/:id",purchasesController.delete);



export default purchasesRoutes;