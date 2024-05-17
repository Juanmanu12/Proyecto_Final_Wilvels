import express from "express";
import Product from "../models/Product.js";

async function list(req, res){
    try {
    const listaDeProductos = await Product.find();
    res.json(listaDeProductos);
} catch (err) {
    res.status(500).json("Error del servidor");
}
}

async function find(req, res){
    try {
    const productId = req.params.id;
    const product = await Product.findById(productId);
    res.status(200).json(product)
    }
    catch (err){
        res.status(500).json("Error del servidor")
    }

}
async function create(req, res){
    try {
    const nuevoProducto = await Product.create({
        name: req.body.name,
        prize: req.body.prize,
        description: req.body.description,
        genre: req.body.genre,
        size: req.body.size,
        stock: req.body.stock,
        color: req.body.color,
        review: req.body.review
    });
    res.json(nuevoProducto);
    } catch (err){
        res.status(500).json("Error del servidor");
        console.log(err)
    }    
}

async function update(req, res){
   try {
    let productoEncontrado = await Product.findById(req.params.id);

    productoEncontrado.name = req.body.name || productoEncontrado.name;
    productoEncontrado.prize = req.body.prize || productoEncontrado.prize;
    productoEncontrado.description = req.body.description || productoEncontrado.description;
    productoEncontrado.genre = req.body.genre || productoEncontrado.genre;
    productoEncontrado.size = req.body.size || productoEncontrado.size;
    productoEncontrado.stock = req.body.stock || productoEncontrado.stock;
    productoEncontrado.color = req.body.color || productoEncontrado.color;
    productoEncontrado.review = req.body.review || productoEncontrado.review;

    await productoEncontrado.save();
    res.json(productoEncontrado);
    } 
    catch (err) {
        res.status(500).json("Error del servidor");
        console.log(err)
    }
}

async function destroy(req, res){
    try {
    const productoEncontrado = await Product.findByIdAndDelete(req.params.id);
    res.json("Usuario eliminado");
    }
    catch(err){
        res.status(500).json("Error del servidor");
    }
}

export default {
    list,
    find,
    create,
    update,
    destroy
};