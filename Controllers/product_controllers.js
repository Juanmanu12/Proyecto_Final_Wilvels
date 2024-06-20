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
    console.log(req.file);
    console.log(req.files);
    console.log(req.body);
    try {
    const nuevoProducto = await Product.create({
        name: req.body.name,
        price: req.body.price,
        description: req.body.description,
        genre: req.body.genre,
        size: req.body.size,
        stock: req.body.stock,
        color: req.body.color,
        review: req.body.review,
        image: req.file.filename
    });
    res.json(nuevoProducto);
    } catch (err){
        console.log(err);
        res.status(500).json("Error del servidor");
    }    
}

async function update(req, res){
   try {
    let productoEncontrado = await Product.findById(req.params.id);

    productoEncontrado.name = req.body.name || productoEncontrado.name;
    productoEncontrado.price = req.body.price || productoEncontrado.price;
    productoEncontrado.description = req.body.description || productoEncontrado.description;
    productoEncontrado.genre = req.body.genre || productoEncontrado.genre;
    productoEncontrado.size = req.body.size || productoEncontrado.size;
    productoEncontrado.stock = req.body.stock || productoEncontrado.stock;
    productoEncontrado.color = req.body.color || productoEncontrado.color;
    productoEncontrado.review = req.body.review || productoEncontrado.review;
    productoEncontrado.image = req.file.filename  || productoEncontrado.image;

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
    await Product.findByIdAndDelete(req.params.id);
    res.json("Producto eliminado");
    }
    catch(err){
        res.status(500).json("Error del servidor");
    }
}

export default {
    list: list,
    find: find,
    create: create,
    update: update,
    destroy: destroy
};