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
        description: "Vela Clásica",
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
        description: "Vela Clásica",
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
        description: "Vela Moderna",
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
        description: "Vela Sofisticada",
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
        description: "Vela Clásica",
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
        description: "Vela Sofisticada",
        scent: ["Bebé", "Lavanda", "Maracuyá"],
        color: ["Azul Pastel", "Verde Pastel", "Rosado"],
        stock: 48,
        image: "BUHO.jpeg"
    });
    await product.create({
        _id: "6682412e9786303dc6b202fb",
        name: "Corazón",
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
        description: "Vela Moderna",
        scent: ["Bebé", "Lavanda", "Maracuyá"],
        color: ["Azul Pastel", "Verde Pastel", "Rosado"],
        stock: 48,
        image: "CORAZON.jpeg"
    });
    await product.create({
        _id: "668241480f6033b43e39dfdd",
        name: "Corazón en las manos",
        size: [{
            code: "S",
            price: 25000,
        },
        {
            code: "M",
            price: 35000
        },
        {
            code: "L",
            price: 45000
        }],
        description: "Vela Moderna",
        scent: ["Bebé", "Lavanda", "Maracuyá"],
        color: ["Azul Pastel", "Verde Pastel", "Rosado"],
        stock: 56,
        image: "CORAZON_EN_LAS_MANOS.jpeg"
    });
    await product.create({
        _id: "668241519a290069a60d2ced",
        name: "Corazón galleta",
        size: [{
            code: "S",
            price: 12000,
        },
        {
            code: "M",
            price: 18000
        },
        {
            code: "L",
            price: 24000
        }],
        description: "Vela Clásica",
        scent: ["Bebé", "Lavanda", "Maracuyá"],
        color: ["Azul Pastel", "Verde Pastel", "Rosado"],
        stock: 48,
        image: "CORAZON_GALLETA.jpeg"
    });
    await product.create({
        _id: "66824168934964d474c60d3f",
        name: "Cubo Corazón",
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
        description: "Vela Brillante",
        scent: ["Bebé", "Lavanda", "Maracuyá"],
        color: ["Azul Pastel", "Verde Pastel", "Rosado"],
        stock: 68,
        image: "CUBO_CORAZON.jpeg"
    });
    await product.create({
        _id: "66824175e8ff73220500779e",
        name: "Cubo Redondo",
        size: [{
            code: "S",
            price: 20000,
        },
        {
            code: "M",
            price: 25000
        },
        {
            code: "L",
            price: 30000
        }],
        description: "Vela Moderna",
        scent: ["Bebé", "Lavanda", "Maracuyá"],
        color: ["Azul Pastel", "Verde Pastel", "Rosado"],
        stock: 48,
        image: "CUBO_REDONDO.jpeg"
    });
    await product.create({
        _id: "6682417f44be8bd929c92559",
        name: "Flor de Loto",
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
        description: "Vela Brillante",
        scent: ["Bebé", "Lavanda", "Maracuyá"],
        color: ["Azul Pastel", "Verde Pastel", "Rosado"],
        stock: 48,
        image: "FLOR_DE_LOTO.jpeg"
    });
    await product.create({
        _id: "6682418fb013a9b82258df89",
        name: "Forma de U",
        size: [{
            code: "S",
            price: 25000,
        },
        {
            code: "M",
            price: 35000
        },
        {
            code: "L",
            price: 45000
        }],
        description: "Vela Brillante",
        scent: ["Bebé", "Lavanda", "Maracuyá"],
        color: ["Azul Pastel", "Verde Pastel", "Rosado"],
        stock: 48,
        image: "FORMA_DE_U.jpeg"
    });
    await product.create({
        _id: "668241962a6046afbceb72d7",
        name: "Gato Angora",
        size: [{
            code: "S",
            price: 18000,
        },
        {
            code: "M",
            price: 24000
        },
        {
            code: "L",
            price: 30000
        }],
        description: "Vela Sofisticada",
        scent: ["Bebé", "Lavanda", "Maracuyá"],
        color: ["Azul Pastel", "Verde Pastel", "Rosado"],
        stock: 48,
        image: "GATO_ANGORA.jpeg"
    });
    await product.create({
        _id: "668241a04a8be956a3ce1299",
        name: "Labrador Acostado",
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
        description: "Vela Sofisticada",
        scent: ["Bebé", "Lavanda", "Maracuyá"],
        color: ["Azul Pastel", "Verde Pastel", "Rosado"],
        stock: 34,
        image: "LABRADOR_ACOSTADO.jpeg"
    });
    await product.create({
        _id: "668242525361401690774528",
        name: "Labrador Acostado",
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
        description: "Vela Sofisticada",
        scent: ["Bebé", "Lavanda", "Maracuyá"],
        color: ["Azul Pastel", "Verde Pastel", "Rosado"],
        stock: 100,
        image: "LABRADOR_SENTADO.jpeg"
    });

    process.exit();
}

productSeeder();