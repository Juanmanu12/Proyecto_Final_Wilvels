import "dotenv/config";
import product from "../models/Product.js";

async function productSeeder(){
    await product.create({
        _id: "667f76d964b969194766c686",
        name: "Angel",
        size: [{
            code: "S",
            price: 20000,
        },
        {
            code: "M",
            price: 30000
        },
        {
            code: "L",
            price: 40000
        }],
        scent: ["Bebé", "Lavanda", "Maracuyá"],
        color: ["Azul Pastel", "Verde Pastel", "Rosado"],
        stock: 30,
        image: "ANGEL.jpeg"

    });
    await product.create({
        _id: "667f76f0e0f569bcfe44c8f4",
        name: "Árbol de Navidad",
        size: [{
            code: "S",
            price: 25000,
        },
        {
            code: "M",
            price: 40000
        },
        {
            code: "L",
            price: 50000
        }],
        scent: ["Bebé", "Lavanda", "Maracuyá"],
        color: ["Azul Pastel", "Verde Pastel", "Rosado"],
        stock: 23,
        image: "ARBOL_NAVIDAD.jpeg"
    });
    await product.create({
        _id: "667f78578442cffa201554ff",
        name: "Bola de Rosas",
        size: [{
            code: "S",
            price: 15000,
        },
        {
            code: "M",
            price: 20000
        },
        {
            code: "L",
            price: 25000
        }],
        scent: ["Bebé", "Lavanda", "Maracuyá"],
        color: ["Azul Pastel", "Verde Pastel", "Rosado"],
        stock: 45,
        image: "BOLA_DE_ROSAS.jpeg"
    });
    await product.create({
        _id: "668035304ae420e4d87547a6",
        name: "Anillo Tridimensional",
        size: [{
            code: "S",
            price: 35000,
        },
        {
            code: "M",
            price: 40000
        },
        {
            code: "L",
            price: 45000
        }],
        scent: ["Bebé", "Lavanda", "Maracuyá"],
        color: ["Azul Pastel", "Verde Pastel", "Rosado"],
        stock: 28,
        image: "ANILLO_TRIDIMENSIONAL.jpeg"
    });
    await product.create({
        _id: "668035ae29fba41181420ad9",
        name: "Bebé entre manos",
        size: [{
            code: "S",
            price: 30000,
        },
        {
            code: "M",
            price: 40000
        },
        {
            code: "L",
            price: 50000
        }],
        scent: ["Bebé", "Lavanda", "Maracuyá"],
        color: ["Azul Pastel", "Verde Pastel", "Rosado"],
        stock: 12,
        image: "BEBE_ENTRE_MANOS.jpeg"
    });
    await product.create({
        _id: "668036229e3538f081202c79",
        name: "Buho",
        size: [{
            code: "S",
            price: 40000,
        },
        {
            code: "M",
            price: 55000
        },
        {
            code: "L",
            price: 65000
        }],
        scent: ["Bebé", "Lavanda", "Maracuyá"],
        color: ["Azul Pastel", "Verde Pastel", "Rosado"],
        stock: 48,
        image: "BUHO.jpeg"
    });
    await product.create({
        _id: "668083782149279d77ab4a58",
        name: "Buho",
        size: [{
            code: "S",
            price: 40000,
        },
        {
            code: "M",
            price: 55000
        },
        {
            code: "L",
            price: 65000
        }],
        scent: ["Bebé", "Lavanda", "Maracuyá"],
        color: ["Azul Pastel", "Verde Pastel", "Rosado"],
        stock: 48,
        image: "BUHO.jpeg"
    });
    process.exit();
}

productSeeder();