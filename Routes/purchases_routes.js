import express from "express";


const  purchasesRouter = express.Router();

purchasesRouter.post("/api/purchases/:id");
purchasesRouter.get("/api/purchases/:id");
purchasesRouter.get("/api/user/:id");
purchasesRouter.get("/api/products/:total");
purchasesRouter.post("/api/purchases/:total");
purchasesRouter.get("/api/purchases/:metodoPago");
purchasesRouter.post("/api/purchases/:metodoPago");


export default purchasesRouter;