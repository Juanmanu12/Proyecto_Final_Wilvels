import express from "express";
import mongoose from "mongoose";

const router = express.Router();

router.use(express.json());

app.get("/api/products");
app.get("/api/products/:id");
app.post("/api/products");
app.patch("/api/products/:id");
app.delete("/api/products/:id");